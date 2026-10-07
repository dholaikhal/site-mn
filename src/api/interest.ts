import type { APIRoute } from 'astro';
import { limited, parse, save } from '../lib/interest';

// Injected by astro.config.mjs only for the Node build. When the pages are on
// GitHub Pages, the form posts here cross-origin, so allowed origins get CORS
// headers and the no-JavaScript redirect goes back to the site that sent it.
const ALLOWED = (process.env.ALLOWED_ORIGINS ?? 'https://mukto.net,https://www.mukto.net')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

function cors(request: Request): Record<string, string> {
  const origin = request.headers.get('origin');
  if (!origin || !ALLOWED.includes(origin)) return {};
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    vary: 'Origin',
  };
}

function siteOrigin(request: Request) {
  const origin = request.headers.get('origin');
  return origin && ALLOWED.includes(origin) ? origin : new URL(request.url).origin;
}

function reply(request: Request, status: number, body: { ok: boolean; error?: string }) {
  const headers = cors(request);
  const wantsJson = request.headers.get('accept')?.includes('application/json');
  if (wantsJson) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { ...headers, 'content-type': 'application/json' },
    });
  }
  if (body.ok) {
    return new Response(null, { status: 303, headers: { ...headers, location: `${siteOrigin(request)}/join/thanks/` } });
  }
  return new Response(`Could not add you to the list: ${body.error}\n\nGo back and try again.`, {
    status,
    headers: { ...headers, 'content-type': 'text/plain; charset=utf-8' },
  });
}

export const OPTIONS: APIRoute = ({ request }) => new Response(null, { status: 204, headers: cors(request) });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin && !ALLOWED.includes(origin)) {
    return new Response('Forbidden', { status: 403 });
  }

  let input: Record<string, unknown>;
  try {
    if (request.headers.get('content-type')?.includes('application/json')) {
      input = await request.json();
    } else {
      const form = await request.formData();
      input = Object.fromEntries(form);
      input.uses = form.getAll('uses');
      input.helps = form.getAll('helps');
    }
  } catch {
    return reply(request, 400, { ok: false, error: 'The request could not be read.' });
  }

  // Honeypot: people never see this field, bots fill it. Pretend success.
  if (typeof input.website === 'string' && input.website.trim()) return reply(request, 200, { ok: true });

  // Behind one reverse proxy (traefik), the last X-Forwarded-For entry is the one
  // the proxy added, so it can't be spoofed by the client.
  const ip = request.headers.get('x-forwarded-for')?.split(',').pop()?.trim() || clientAddress;
  if (limited(ip)) {
    return reply(request, 429, { ok: false, error: 'Too many sign-ups from this address. Try again in an hour.' });
  }

  const parsed = parse(input);
  if (!parsed.ok) return reply(request, 400, parsed);

  try {
    await save(parsed.record);
  } catch (err) {
    console.error('interest: save failed', err);
    return reply(request, 500, { ok: false, error: 'The list could not be saved on our side. Try again later.' });
  }
  return reply(request, 200, { ok: true });
};

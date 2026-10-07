import type { APIRoute } from 'astro';
import { limited, parse, save } from '../../lib/interest';

export const prerender = false;

function reply(request: Request, status: number, body: { ok: boolean; error?: string }) {
  const wantsJson = request.headers.get('accept')?.includes('application/json');
  if (wantsJson) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json' },
    });
  }
  if (body.ok) return Response.redirect(new URL('/join/thanks/', request.url), 303);
  return new Response(`Could not add you to the list: ${body.error}\n\nGo back and try again.`, {
    status,
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
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

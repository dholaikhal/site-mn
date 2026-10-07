// Posts a sign-up as JSON to the interest endpoint: Formboost by default, or the
// self-hosted /api/interest (see astro.config.mjs). Both accept JSON and answer
// 2xx on success. Formboost doesn't take multipart bodies, and its handling of
// repeated keys isn't documented, so list values are joined into one string.
export async function submitInterest(endpoint: string, data: Record<string, string | string[]>) {
  const body: Record<string, string> = {};
  for (const [k, v] of Object.entries(data)) body[k] = Array.isArray(v) ? v.join(', ') : v;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify(body),
  });
  if (res.ok) return { ok: true as const };
  const reply = await res.json().catch(() => ({}));
  return { ok: false as const, error: String(reply.message ?? reply.error ?? `The list answered ${res.status}.`) };
}

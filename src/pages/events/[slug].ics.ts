import type { APIRoute } from 'astro';
import { EVENTS } from '../../data/events';
import { ics } from '../../lib/ics';

export function getStaticPaths() {
  return EVENTS.map((e) => ({ params: { slug: e.slug }, props: { event: e } }));
}

export const GET: APIRoute = ({ props, site }) =>
  new Response(ics([props.event], site!), { headers: { 'content-type': 'text/calendar; charset=utf-8' } });

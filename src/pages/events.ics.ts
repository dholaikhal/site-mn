import type { APIRoute } from 'astro';
import { EVENTS } from '../data/events';
import { ics } from '../lib/ics';

export const GET: APIRoute = ({ site }) =>
  new Response(ics(EVENTS, site!), { headers: { 'content-type': 'text/calendar; charset=utf-8' } });

import { NextRequest, NextResponse } from 'next/server';

// Basic HTTP auth at the edge. Credentials live in env vars set in Vercel.
// AUTH_USERNAME and AUTH_PASSWORD must both be set for access to be granted;
// if either is missing, the site stays open (so a misconfigured deploy fails
// visibly rather than locking you out).

export function middleware(req: NextRequest) {
  const user = process.env.AUTH_USERNAME;
  const pass = process.env.AUTH_PASSWORD;
  if (!user || !pass) return NextResponse.next();

  const header = req.headers.get('authorization');
  if (header) {
    const [scheme, encoded] = header.split(' ');
    if (scheme === 'Basic' && encoded) {
      const decoded = atob(encoded);
      const idx = decoded.indexOf(':');
      const u = decoded.slice(0, idx);
      const p = decoded.slice(idx + 1);
      if (u === user && p === pass) return NextResponse.next();
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="AI briefing", charset="UTF-8"' },
  });
}

// Run on every request except Next internals and the favicon.
export const config = {
  matcher: ['/((?!_next/|favicon.ico$).*)'],
};

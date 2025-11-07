import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const isApp = req.nextUrl.pathname.startsWith('/app');
  if (!isApp) return NextResponse.next();

  const accessToken = req.cookies.get('sb-access-token')?.value;
  if (!accessToken) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('redirect', req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/app/:path*'],
};

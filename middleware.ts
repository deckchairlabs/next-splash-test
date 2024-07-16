import { isbot } from 'isbot'
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    {
      /**
       * Exclude the following paths from the middleware:
       * - API routes
       * - Splash page
       * - Static assets
       * - Image assets
       * - Favicon
       * - Robots.txt
       */
      source:
        '/((?!api|splash|_next/static|_next/image|favicon.ico|robots.txt).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
        { type: 'cookie', key: 'firstVisit' },
      ],
    },
  ],
}

export default function middleware(request: NextRequest) {
  // If the user-agent is a bot, we don't want to show the splash page
  if (isbot(request.headers.get('user-agent'))) {
    return NextResponse.next()
  }

  // Otherwise, this user hasn't visited the site before
  // so we'll rewrite the request to show the splash page
  request.nextUrl.pathname = '/splash'
  request.nextUrl.searchParams.set('firstVisit', 'true')

  return NextResponse.rewrite(request.nextUrl)
}

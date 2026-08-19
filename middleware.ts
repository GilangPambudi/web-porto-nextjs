import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { notifyVisitor } from '@/lib/visitor-webhook'

const VISIT_COOKIE = 'portfolio_visit'
const BOT_USER_AGENT = /bot|crawler|spider|slurp|facebookexternalhit|whatsapp|preview/i

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next()
  const userAgent = request.headers.get('user-agent') || ''

  // ponytail: UA filtering is heuristic; use managed bot detection if accuracy matters.
  if (
    request.method !== 'GET' ||
    request.cookies.has(VISIT_COOKIE) ||
    BOT_USER_AGENT.test(userAgent)
  ) {
    return response
  }

  response.cookies.set(VISIT_COOKIE, '1', {
    httpOnly: true,
    maxAge: 60,
    path: '/',
    sameSite: 'lax',
    secure: request.nextUrl.protocol === 'https:',
  })
  event.waitUntil(notifyVisitor(request.headers))

  return response
}

export const config = {
  matcher: [
    {
      source: '/',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}

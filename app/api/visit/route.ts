import { notifyVisitor, resolveVisitorDetails } from '@/lib/visitor-webhook'

const BOT_USER_AGENT = /bot|crawler|spider|slurp|facebookexternalhit|whatsapp|preview/i

export async function POST(request: Request) {
  const origin = request.headers.get('origin')

  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: 'Forbidden' }, { status: 403 })
  }

  if (BOT_USER_AGENT.test(request.headers.get('user-agent') || '')) {
    return new Response(null, { status: 204 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const details = await resolveVisitorDetails(body, request.headers)
  const sent = await notifyVisitor(details)

  return new Response(null, { status: sent ? 204 : 503 })
}

export interface IpDetails {
  ip?: string
  city?: string
  region?: string
  country_name?: string
  org?: string
}

interface IpInfoLite {
  as_name?: string
  country?: string
}

const text = (value: unknown) => {
  if (typeof value !== 'string') return undefined

  return value.trim().slice(0, 200) || undefined
}

const decodedHeader = (headers: Headers, name: string) => {
  const value = text(headers.get(name))
  if (!value) return undefined

  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

const codeBlock = (value?: string | null) =>
  `\`\`\`${(value || 'Unknown').replaceAll('`', '').slice(0, 1000)}\`\`\``

export function buildVisitorPayload(location: IpDetails, now = new Date()) {
  return {
    embeds: [
      {
        title: '\u{1F440} Ada yang mengunjungi portfolio',
        color: 3447003,
        fields: [
          {
            name: 'IP Address',
            value: codeBlock(location.ip),
            inline: false,
          },
          {
            name: 'Location',
            value: codeBlock(
              [location.city, location.region, location.country_name]
                .filter(Boolean)
                .join(', '),
            ),
            inline: false,
          },
          {
            name: 'ISP',
            value: codeBlock(location.org),
            inline: false,
          },
          {
            name: 'Date',
            value: codeBlock(
              now.toLocaleDateString('en-GB', { timeZone: 'Asia/Jakarta' }),
            ),
            inline: true,
          },
          {
            name: 'Time',
            value: codeBlock(
              now.toLocaleTimeString('en-GB', {
                timeZone: 'Asia/Jakarta',
                hour12: false,
              }),
            ),
            inline: true,
          },
        ],
      },
    ],
  }
}

export async function resolveVisitorDetails(
  input: unknown,
  headers: Headers,
): Promise<IpDetails> {
  const body =
    input && typeof input === 'object'
      ? (input as Record<string, unknown>)
      : {}
  const forwardedIp =
    text(headers.get('x-vercel-forwarded-for')?.split(',')[0]) ||
    text(body.ip) ||
    text(headers.get('x-forwarded-for')?.split(',')[0])
  const clientCountry = text(body.country_name)
  const clientOrg = text(body.org)
  let ipInfo: IpInfoLite = {}

  if ((!clientCountry || !clientOrg) && forwardedIp && process.env.IPINFO_TOKEN) {
    try {
      const response = await fetch(
        `https://api.ipinfo.io/lite/${encodeURIComponent(forwardedIp)}?token=${encodeURIComponent(process.env.IPINFO_TOKEN)}`,
        { cache: 'no-store', signal: AbortSignal.timeout(5000) },
      )
      if (!response.ok) throw new Error(`IPinfo returned ${response.status}`)

      ipInfo = (await response.json()) as IpInfoLite
    } catch (error) {
      console.error('Visitor ISP lookup failed:', error)
    }
  }

  return {
    ip: forwardedIp,
    city: text(body.city) || decodedHeader(headers, 'x-vercel-ip-city'),
    region:
      text(body.region) || decodedHeader(headers, 'x-vercel-ip-country-region'),
    country_name:
      clientCountry || text(ipInfo.country) || decodedHeader(headers, 'x-vercel-ip-country'),
    org: clientOrg || text(ipInfo.as_name),
  }
}

export async function notifyVisitor(location: IpDetails) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('Visitor webhook is not configured')
    return false
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buildVisitorPayload(location)),
    })

    if (!response.ok) throw new Error(`Discord returned ${response.status}`)
    return true
  } catch (error) {
    console.error('Visitor webhook failed:', error)
    return false
  }
}

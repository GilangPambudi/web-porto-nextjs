interface IpDetails {
  ip?: string
  city?: string
  region?: string
  country_name?: string
  org?: string
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

async function getIpDetails(headers: Headers): Promise<IpDetails> {
  const ip = headers.get('x-forwarded-for')?.split(',')[0].trim() || ''
  const endpoint = ip
    ? `https://ipapi.co/${encodeURIComponent(ip)}/json/`
    : 'https://ipapi.co/json/'

  try {
    const response = await fetch(endpoint, { cache: 'no-store' })
    if (!response.ok) throw new Error(`ipapi returned ${response.status}`)

    const location = (await response.json()) as IpDetails
    return { ...location, ip: location.ip || ip }
  } catch (error) {
    console.error('Visitor location lookup failed:', error)
    return { ip }
  }
}

export async function notifyVisitor(headers: Headers) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('Visitor webhook is not configured')
    return
  }

  const payload = buildVisitorPayload(await getIpDetails(headers))

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error(`Discord returned ${response.status}`)
  } catch (error) {
    console.error('Visitor webhook failed:', error)
  }
}

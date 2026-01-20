import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: {
    default: 'Gilang Pambudi Wibawanto',
    template: '%s | Gilang Pambudi Wibawanto',
  },
  description: 'Web Developer with internship and freelance experience building event platforms and landing pages. Skilled in full-cycle web development, capable of managing live systems and production traffic under tight deadlines.',
  keywords: ['Gilang Pambudi Wibawanto', 'Gilang Pambudi', 'Gilang', 'Pambudi', 'Wibawanto', 'Gilang Polinema', 'Gilang Pambudi Polinema', 'Web Developer', 'Next.js', 'React', 'Portfolio', 'Frontend Developer', 'Software Engineer', 'Freelancer', 'IT Operations'],
  authors: [{ name: 'Gilang Pambudi Wibawanto' }],
  creator: 'Gilang Pambudi Wibawanto',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Gilang Pambudi Wibawanto',
    description: 'Web Developer with internship and freelance experience building event platforms and landing pages. Skilled in full-cycle web development, capable of managing live systems and production traffic under tight deadlines.',
    url: 'https://pambudi.dev',
    siteName: 'Gilang Pambudi Wibawanto',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Gilang Pambudi Wibawanto',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gilang Pambudi Wibawanto',
    description: 'Web Developer with internship and freelance experience building event platforms and landing pages. Skilled in full-cycle web development, capable of managing live systems and production traffic under tight deadlines.',
    images: ['/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}

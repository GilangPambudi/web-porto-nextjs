import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gilang Pambudi Wibawanto',
  alternateName: 'Gilang Pambudi',
  url: 'https://pambudi.dev',
  image: 'https://pambudi.dev/profil.jpeg',
  jobTitle: 'Software Developer',
  description: 'Full-stack web developer and software engineer based in Malang, Indonesia. Specializes in Next.js, React, Laravel, PHP, and CodeIgniter. Currently working at PT Green Energi Utama. Available for freelance and full-time opportunities.',
  knowsAbout: [
    'Next.js',
    'React',
    'Laravel',
    'PHP',
    'CodeIgniter',
    'Tailwind CSS',
    'WordPress',
    'Node.js',
    'Web Development',
    'Software Engineering',
    'ERP Systems',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'State Polytechnic of Malang',
    alternateName: 'Polinema',
    url: 'https://www.polinema.ac.id',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'PT Green Energi Utama',
    url: 'https://www.greenenergiutama.co.id',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Malang',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID',
  },
  sameAs: [
    'https://github.com/gilangpambudi',
    'https://linkedin.com/in/gilangpambudi',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Gilang Pambudi Wibawanto Portfolio',
  url: 'https://pambudi.dev',
  description: 'Personal portfolio of Gilang Pambudi Wibawanto, a full-stack web developer and software engineer from Malang, Indonesia.',
  author: {
    '@type': 'Person',
    name: 'Gilang Pambudi Wibawanto',
  },
  inLanguage: ['id', 'en'],
}

export const metadata: Metadata = {
  title: {
    default: 'Gilang Pambudi Wibawanto',
    template: '%s | Gilang Pambudi Wibawanto',
  },
  metadataBase: new URL('https://pambudi.dev'),
  description: 'Web Developer with experience building event platforms and landing pages. Skilled in full-cycle web development, capable of managing live systems and production traffic under tight deadlines.',
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
    description: 'Web Developer experience building event platforms and landing pages. Skilled in full-cycle web development, capable of managing live systems and production traffic under tight deadlines.',
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
    description: 'Web Developer experience building event platforms and landing pages. Skilled in full-cycle web development, capable of managing live systems and production traffic under tight deadlines.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}

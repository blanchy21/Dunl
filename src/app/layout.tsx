import type { Metadata } from 'next'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { siteConfig } from '../config/site.config'
import CookieConsent from '../components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const baseUrl = siteConfig.sitemap.baseUrl

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.metadata.title,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.metadata.description,
  keywords: [
    'Dún Laoghaire Shopping Centre',
    'Dun Laoghaire shopping',
    'shopping centre Dublin',
    'shops in Dún Laoghaire',
    'Marine Road shopping',
    'Dublin coastal shopping',
  ],
  authors: [{ name: siteConfig.siteName }],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: baseUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.variable} ${playfair.variable} font-sans overflow-x-hidden`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}

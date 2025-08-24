import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dun Laoghaire Shopping Centre - Shop, Dine & Entertainment',
  description: 'Discover the perfect blend of shopping, dining, and entertainment in the heart of Dublin\'s coastal town. Visit Dun Laoghaire Shopping Centre today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

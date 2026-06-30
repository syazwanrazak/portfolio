import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Syazwan — Full-Stack Web Developer',
  description:
    'Full-stack web developer building real-world apps for SMEs and community clients. Based in Selangor, Malaysia.',
  openGraph: {
    title: 'Syazwan — Full-Stack Web Developer',
    description:
      'Full-stack web developer building real-world apps for SMEs and community clients.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  )
}

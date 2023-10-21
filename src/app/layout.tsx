import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Flag of Palestine",
  description: "Flag of Palestine",
  openGraph: {
    type: 'website',
    title: "Flag of Palestine",
    description: "Flag of Palestine",
    url: "https://c-a-m-l.com",
    siteName: "Flag of Palestine",
    images: [
      {
        url: "/meta.png",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flag of Palestine',
    description: 'Flag of Palestine',
    images: ['/meta.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

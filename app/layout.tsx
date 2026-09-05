import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { StorefrontHeader } from '@/components/storefront-header'
import { StorefrontFooter } from '@/components/storefront-footer'

export const metadata: Metadata = {
  title: 'SHOP.CO — Find Clothes That Match Your Style',
  description: 'Discover new arrivals, top selling styles, and clothes made for your everyday wardrobe.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        <div className="min-h-screen bg-[#a8a8a8] px-0 text-[#111] sm:px-7">
          <div className="mx-auto min-h-screen max-w-[1080px] bg-white shadow-sm">
            <div className="px-4 pt-3 sm:px-12">
              <StorefrontHeader />
              <main>{children}</main>
            </div>
            <StorefrontFooter />
          </div>
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dotcommediahouse.com'),
  title: {
    default: 'Dot Com Media House | Innovative Media Solutions',
    template: '%s | Dot Com Media House'
  },
  description: 'Dot Com Media House offers cutting-edge media solutions for the digital age, specializing in advertising, event management, and branding.',
  keywords: ['The Vibe Gaming', 'Vibe Gaming' ,'media house', 'digital marketing', 'event management', 'branding', 'e-gaming', 'content creation'],
  authors: [{ 
    name: 'Thulani Dev-Majxr Mthembu', 
    url: 'https://devmajxr.co.za' 
  }],
  creator: 'Thulani Dev-Majxr Mthembu',
  publisher: 'Dot Com Media House',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Dot Com Media House | Innovative Media Solutions',
    description: 'Cutting-edge media solutions for the digital age, specializing in advertising, event management, and branding.',
    url: 'https://dotcommediahouse.com',
    siteName: 'Dot Com Media House',
    images: [
      {
        url: 'https://dotcommediahouse.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dot Com Media House | Innovative Media Solutions',
    description: 'Cutting-edge media solutions for the digital age, specializing in advertising, event management, and branding.',
    images: ['https://dotcommediahouse.com/twitter-image.jpg'],
    creator: '@dotcommediahouse',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google523f418b1738107c.html'
  },
  alternates: {
    canonical: 'https://www.dotcommediahouse.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
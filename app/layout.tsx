import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata = {
  title: {
    default: 'Dot Com Media House | Innovative Media Solutions',
    template: '%s | Dot Com Media House'
  },
  description: 'Dot Com Media House offers cutting-edge media solutions for the digital age, specializing in advertising, event management, and branding.',
  keywords: ['media house', 'digital marketing', 'event management', 'branding', 'e-gaming', 'content creation'],
  authors: [{ 
    name: 'Thulani Dev-Majxr Mthembu', 
    url: 'https://devmajxr.co.za' 
  }],
  creator: 'Thulani Dev-Majxr Mthembu',
  publisher: 'Dot Com Media House',
  email: 'thulanim457@gmail.com',
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
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
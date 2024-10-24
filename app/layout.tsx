import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GamerLoader from "@/components/GamerLoader"
import "./globals.css"
import { Inter } from 'next/font/google'
import { metadata, viewport } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export { metadata, viewport }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-background text-foreground flex flex-col" suppressHydrationWarning>
        <GamerLoader />
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: '121212.movement | Organize. Mobilize. Build.',
  description:
    'The 121212 Movement organizes communities, mobilizes resources, and builds generational power through direct action campaigns.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-brand-black font-sans">
        <Header />
        <main className="pt-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

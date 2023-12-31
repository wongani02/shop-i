import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css'
import Footer from '@/components/app_components/Footer'
import Navbar from '@/components/app_components/Navbar'
import ModalProvider from '@/providers/ModalProvider';
import { Toaster } from '@/components/ui/toaster';

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Shop by next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ModalProvider/>
        <Navbar/>
        {children}
        <Footer/>
        <Toaster />
      </body>
    </html>
  )
}

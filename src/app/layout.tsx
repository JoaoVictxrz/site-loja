import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Site portfolio',
  description: 'Site para portfolio ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br' className='scroll-smooth'>
      <body className='bg-gray-900'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

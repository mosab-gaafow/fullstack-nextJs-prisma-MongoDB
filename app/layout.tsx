import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import NextAuthProvider from './providers/NextAuthProvider'
import ReactQueryClientProvider from './providers/ReactQueryClientProvider'
import ToastProvider from './providers/ToastProvider'
import Navbar from './_components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <NextAuthProvider>
            <Navbar />
            {children}
            <ToastProvider />
          </NextAuthProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}

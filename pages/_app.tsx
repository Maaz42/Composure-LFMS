import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Nav from '@/components/ReusableComponents/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Nav>
        <Component {...pageProps} />
      </Nav>
    </main>
  )
}
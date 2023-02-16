import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Playfair_Display } from '@next/font/google'
import AppBar from "@/ui/components/AppBar"

const playfairDisplay = Playfair_Display({ subsets: ['latin', 'cyrillic'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={playfairDisplay.className}>
      <AppBar />
      <Component {...pageProps} />
    </main>
  )
}

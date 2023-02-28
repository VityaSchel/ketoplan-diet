import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppBar from "@/ui/components/AppBar"
import cx from 'classnames'
import { interFont, playfairDisplayFont } from '@/ui/fonts'
import ThemeContextContainer from '@/ui/fragments/ThemeContextContainer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cx(playfairDisplayFont.className, interFont.className)}>
      <ThemeContextContainer>
        <AppBar />
        <Component {...pageProps} />
      </ThemeContextContainer>
    </main>
  )
}

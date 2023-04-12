import '@/shared/styles/globals.scss'
import type { AppProps } from 'next/app'
import AppBar from "@/shared/ui/appbar"
import cx from 'classnames'
import { interFont, playfairDisplayFont } from '@/shared/fonts'
import ThemeContextContainer from '@/shared/ui/theme-context-container'

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

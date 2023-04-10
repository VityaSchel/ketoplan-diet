import React from 'react'
import { ScreenTheme, ScreenThemeContext } from '@/shared/ThemeContextContainer'
import { useContext } from 'react'

export default function MobileScreenTheme(props: { theme: ScreenTheme }) {
  const { setScreenTheme } = useContext(ScreenThemeContext)

  React.useEffect(() => {
    setScreenTheme(props.theme)
  }, [props.theme])

  return (
    <></>
  )
}
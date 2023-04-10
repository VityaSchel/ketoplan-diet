import React from 'react'

export type ScreenTheme = 'light' | 'dark'
export const ScreenThemeContext = React.createContext<{ screenTheme: ScreenTheme, setScreenTheme: (newTheme: ScreenTheme) => any }>({ screenTheme: 'light', setScreenTheme: () => {} })

export default function ThemeContextContainer(props: { children: React.ReactNode }) {
  const [screenTheme, setScreenTheme] = React.useState<ScreenTheme>('light')
  const toggleTheme = () => setScreenTheme(screenTheme === 'light' ? 'dark' : 'light')

  return (
    <ScreenThemeContext.Provider value={{ screenTheme, setScreenTheme }}>
      {props.children}
    </ScreenThemeContext.Provider>
  )
}
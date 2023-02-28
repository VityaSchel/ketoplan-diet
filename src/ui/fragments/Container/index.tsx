import React from 'react'

type ScreenTheme = 'light' | 'dark'
export const ScreenThemeContext = React.createContext<{ screenTheme: ScreenTheme, toggleTheme: () => any }>({ screenTheme: 'light', toggleTheme: () => {} })

export default function Container(props: { children: React.ReactNode }) {
  const [screenTheme, setScreenTheme] = React.useState<ScreenTheme>('light')
  const toggleTheme = () => setScreenTheme(screenTheme === 'light' ? 'dark' : 'light')

  return (
    <ScreenThemeContext.Provider value={{ screenTheme, toggleTheme }}>
      {props.children}
    </ScreenThemeContext.Provider>
  )
}
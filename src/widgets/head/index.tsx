import React from 'react'
import Head from 'next/head'

export default function CustomHead({ 
  title,
  children
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <Head>
      <title>{title} — Кето-диета</title>
      {children}
    </Head>
  )
}

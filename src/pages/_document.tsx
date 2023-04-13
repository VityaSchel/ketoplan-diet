import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
        <meta name="description" content="Получите персональный план прямо сейчас и начните добиваться результат, не откладывая это в долгий ящик" />
        <meta name="keywords" content="диета,кетоплан,кетоплановая диета" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

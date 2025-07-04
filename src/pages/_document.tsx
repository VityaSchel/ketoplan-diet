import { Html, Head, Main, NextScript } from 'next/document'
import { PreloadIcons } from '@/app/preload'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
        <meta name="description" content="Получите персональный план прямо сейчас и начните добиваться результат, не откладывая это в долгий ящик" />
        <meta name="keywords" content="диета,кетоплан,кетоплановая диета" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(${process.env.NEXT_PUBLIC_YANDEX_METRICA_ID ?? '0'}, 'init', {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
            });` }}>
        </script>
        <noscript><div dangerouslySetInnerHTML={{ __html: `<img src='https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YANDEX_METRICA_ID ?? '0'}' style='position:absolute; left:-9999px;' alt=''></img>` }}></div></noscript>
        <PreloadIcons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

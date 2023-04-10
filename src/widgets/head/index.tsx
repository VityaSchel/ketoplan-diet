import Head from 'next/head'

export default function CustomHead(props: { title: string }) {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  )
}
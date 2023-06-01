import NavBar from '@/components/NavBar'
import Container from '@/components/Container'
import Menu from '@/components/Menu'
import '@/styles/globals.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {


  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Container>
      <NavBar title="PortiFolio" />
    </Container>
    <Container row="true">
      <Container>
        <Menu />
      </Container>
      <Container flex="true" margin="1rem 1.5rem">
        <Component {...pageProps} />
      </Container>
    </Container>
  </>
}
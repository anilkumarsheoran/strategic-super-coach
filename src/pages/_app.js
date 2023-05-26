import StickyMenu from '@/components/StickyMenu'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return  <Layout
  header={<Header />}
  stickyMenu={<StickyMenu />}
  content={<Component {...pageProps} />}
/>
}

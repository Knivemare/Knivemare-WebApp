// Import Components
import AppMetaTags from '../components/AppMetaTags'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

import { SpeedInsights } from "@vercel/speed-insights/next"

// Import Styles
import styles from 'styles/App.module.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppMetaTags/>
      <AppNavbar/>
      <main className={styles.Content}>
        <Component {...pageProps} />
        <SpeedInsights />
      </main>
      <AppFooter/>
    </>
  )
}

export default MyApp

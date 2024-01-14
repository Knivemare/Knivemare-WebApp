// Import Components
import AppMetaTags from '../components/AppMetaTags'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

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
        <Analytics />
      </main>
      <AppFooter/>
    </>
  )
}

export default MyApp

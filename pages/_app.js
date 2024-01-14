// Import Components
import AppMetaTags from '../components/AppMetaTags'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

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
      </main>
      <AppFooter/>
    </>
  )
}

export default MyApp

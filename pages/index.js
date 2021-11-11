// Import Modules & Components
import PageMetaTags from 'components/PageMetaTags';
import FullHeightHero from 'components/FullHeightHero';
// Import Styles
import styles from 'styles/pages/Index.module.scss'

export default function Home() {
  return (
    <>
      <PageMetaTags/>
      <FullHeightHero
        heading="Knivemare.io"
        text="🔥 Welcome to my personal WebApp 🔥"
      />
    </>
  )
}

// Import Modules
import Container from './Container'
import Link from 'next/link'
// Import Styles
import styles from '../styles/components/AppFooter.module.scss'

// Content
export default function AppFooter() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Legal}>
                <Container>
                    <Link href="/datenschutz" className={styles.Link}>
                      Datenschutz
                    </Link>

                    <Link href="/impressum" className={styles.Link}>
                      Impressum
                    </Link>
                </Container>
            </div>
        </footer>
    )
}
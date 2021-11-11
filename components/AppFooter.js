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
                    <Link href="/datenschutz">
                        <a className={styles.Link}>Datenschutz</a>
                    </Link>

                    <Link href="/impressum">
                        <a className={styles.Link}>Impressum</a>
                    </Link>
                </Container>
            </div>
        </footer>
    )
}
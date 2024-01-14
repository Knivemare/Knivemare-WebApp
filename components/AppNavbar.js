// Import Modules
import Link from 'next/link'
// Import Styles
import styles from '../styles/components/AppNavbar.module.scss'

export function NavItem(p) {
    return (
        <Link href={p.link} alt={p.title} className={styles.NavItem}>
          {p.title}
        </Link>
    )
}

// Content
export default function AppNavbar() {

    return (
        <header className={styles.Navbar}>
            <Link href="/" className={styles.Logo}>
                <img src="/img/knivemare-logo-navbar.png"
                  alt="WebApp Starter Logo"  
                />
            </Link>
            <nav className={styles.Nav}>
                <NavItem title="Über mich" link="/ueber"/>
            </nav>
        </header>
    )
}
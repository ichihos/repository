import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About-LignoSat</Link></li>
                <li><Link href="/amateur">Amateur-Mission</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/members">Members</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

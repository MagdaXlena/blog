import Link from "next/link"
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>MyWheels</div>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/comments">Comments</Link>
            </div>
        </div>
    )
}
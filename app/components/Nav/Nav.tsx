import * as React from "react"
import Link from "next/link"
import styles from "./Nav.module.css"

function Nav() {
  return (
    <nav className={styles.nav} role="navigation" aria-label="main navigation">
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Nav

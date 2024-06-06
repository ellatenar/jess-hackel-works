import * as React from "react"
import Link from "next/link"
import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Site built by <Link href="https://heron.zone">Ella Heron</Link> ~
        Pillowlava font by{" "}
        <Link href="https://velvetyne.fr/fonts/pilowlava/">Velvetyne</Link> ~
        Absans font by{" "}
        <Link href="https://www.collletttivo.it/typefaces/absans">
          Valerio Monopoli
        </Link>
      </div>
    </footer>
  )
}

export default Footer

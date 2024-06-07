"use client"

import * as React from "react"
import Link from "next/link"
import styles from "./Nav.module.css"
import { usePathname } from "next/navigation"
import classNames from "classnames"
import path from "path"

const links = [
  { title: "Home", href: "/" },
  { title: "Bio", href: "/bio" },
  { title: "Experience", href: "/experience" },
  { title: "Contact", href: "/contact" },
]

function Nav() {
  const pathname = usePathname()
  return (
    <nav className={styles.nav} role="navigation" aria-label="main navigation">
      {links.map((link, i) => (
        <Link
          href={link.href}
          key={i}
          className={classNames(pathname === link.href && styles.active)}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default Nav

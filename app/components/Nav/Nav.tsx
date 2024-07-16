"use client"

import * as React from "react"
import Link from "next/link"
import styles from "./Nav.module.css"
import { usePathname } from "next/navigation"
import classNames from "classnames"
import arrowDown from "public/media/arrow-down-s-line.svg"
import Image from "next/image"
import { useState } from "react"

const Links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Work", href: "/work" },
  { title: "Contact", href: "/contact" },
]

export type LinkType = keyof typeof Links

function Nav() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <nav
        className={classNames(styles.nav, openMenu && styles.visible)}
        role="navigation"
        aria-label="main navigation"
      >
        {Links.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className={classNames(pathname === link.href && styles.active)}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <button className={classNames(styles.openMobileNav)}>
        <Image
          priority
          className={classNames(styles.pointer, openMenu && styles.flipped)}
          src={arrowDown}
          alt=""
          width={25}
          height={25}
          onClick={() => setOpenMenu((b) => !b)}
        />
      </button>
    </>
  )
}

export default Nav

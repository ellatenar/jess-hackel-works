import Link from "next/link"
import * as React from "react"

function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="main navigation">
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Nav

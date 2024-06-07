import * as React from "react"
import { attributes, react as HomeContent } from "../content/home.md"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Header from "./components/Header"
import styles from "./page.module.css"
import Image from "next/image"
import headshot from "public/media/headshot.png"
import Squiggles from "./components/Squiggles"

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Image
          src={headshot}
          className={styles.headshot}
          alt="headshot"
          height={250}
        />
        <HomeContent />
      </main>
      <Squiggles />
      <Footer />
    </>
  )
}

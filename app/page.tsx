import * as React from "react"
import { attributes, react as HomeContent } from "content/home.md"
import styles from "./page.module.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Image from "next/image"
import headshot from "public/media/headshot.png"
import Squiggles from "./components/Squiggles"

export default function Home() {
  const { title, accent } = attributes

  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <Image
          src={headshot}
          className={styles.headshot}
          alt="headshot"
          height={250}
          objectFit="contain"
          priority
        />
        <HomeContent />
      </main>
      <Squiggles page="home" />
      <Footer />
    </>
  )
}

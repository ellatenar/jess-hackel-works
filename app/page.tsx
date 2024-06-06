import * as React from "react"
import { attributes, react as HomeContent } from "../content/home.md"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Header from "./components/Header"
import styles from "./page.module.css"
import Image from "next/image"
import blob1 from "public/media/blob1.png"
import blob2 from "public/media/blob2.png"

export default function Home() {
  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <Header />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Convallis convallis tellus id interdum velit laoreet id. Nisl vel
            pretium lectus quam id. At tempor commodo ullamcorper a lacus
            vestibulum sed arcu. At augue eget arcu dictum.
          </div>
        </main>
        <Image src={blob1} className={styles.blob1} alt="" />
        <Image src={blob2} className={styles.blob2} alt="" />
        <Footer />
      </div>
    </>
  )
}

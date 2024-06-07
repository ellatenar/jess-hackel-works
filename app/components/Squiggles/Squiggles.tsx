import * as React from "react"
import styles from "./Squiggles.module.css"
import Image from "next/image"
import blob1 from "public/media/blob1.png"
import blobOutline1 from "public/media/blob-outline1.png"
import blob2 from "public/media/blob2.png"
import blobOutline2 from "public/media/blob-outline2.png"

import blob4 from "public/media/blob4.png"
import blob5 from "public/media/blob5.png"

function Squiggles() {
  return (
    <>
      <Image src={blob1} className={styles.blob1} alt="" />
      <Image src={blobOutline1} className={styles.blobOutline1} alt="" />
      <Image src={blob2} className={styles.blob2} alt="" />
      <Image src={blobOutline2} className={styles.blobOutline2} alt="" />
      <Image src={blob2} className={styles.blob2} alt="" />
      <Image src={blob4} className={styles.blob4} alt="" />
      <Image src={blob5} className={styles.blob4} alt="" />
    </>
  )
}

export default Squiggles

import * as React from "react"
import styles from "./Squiggles.module.css"
import Image from "next/image"
import blob1 from "public/media/blob1.png"
import blob2 from "public/media/blob2.png"
import blobOutline1 from "public/media/blob-outline1.png"
import blobOutline2 from "public/media/blob-outline2.png"

import blob4 from "public/media/blob4.png"
import blob5 from "public/media/blob5.png"

interface Props {
  page: string
}

function Squiggles({ page }: Props) {
  return (
    <>
      {page === "bio" ? (
        <>
          <Image src={blob2} className={styles.blob2_Bio} alt="" />
          <Image
            src={blobOutline2}
            className={styles.blobOutline2_Bio}
            alt=""
          />
          <Image src={blob4} className={styles.blob4_Bio} alt="" />
          <Image src={blob5} className={styles.blob4_Bio} alt="" />
        </>
      ) : page === "contact" ? (
        <></>
      ) : page === "experience" ? (
        <></>
      ) : (
        page === "home" && (
          <>
            <Image src={blob1} className={styles.blob1_Home} alt="" />
            <Image
              src={blobOutline1}
              className={styles.blobOutline1_Home}
              alt=""
            />
            <Image src={blob4} className={styles.blob4_Home} alt="" />
            <Image src={blob5} className={styles.blob4_Home} alt="" />
          </>
        )
      )}
    </>
  )
}

export default Squiggles

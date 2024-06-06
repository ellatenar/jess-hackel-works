import * as React from "react"
import styles from "./Header.module.css"
import classNames from "classnames"
import { pillowlava } from "@/app/fonts"

function Header() {
  return (
    <h1 className={styles.header}>
      <span>₪</span>
      <span className={styles.headerText}>
        Jess Hackel{" "}
        <span className={classNames(styles.flourish, pillowlava.className)}>
          works
        </span>
      </span>
      <span></span>
    </h1>
  )
}

export default Header

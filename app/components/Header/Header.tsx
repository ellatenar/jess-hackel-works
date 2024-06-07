import * as React from "react"
import styles from "./Header.module.css"
import classNames from "classnames"
import { pillowlava } from "@/app/fonts"

interface Props {
  title?: string
  accent?: string
}

function Header({ title, accent }: Props) {
  return (
    <h1 className={styles.header}>
      <span>₪</span>
      <span className={styles.headerText}>
        {!!title && <span className={styles.title}>{title}</span>}
        <span className={classNames(styles.accent, pillowlava.className)}>
          {accent}
        </span>
      </span>
      <span></span>
    </h1>
  )
}

export default Header

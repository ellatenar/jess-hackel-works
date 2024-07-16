import * as React from "react"
import styles from "./Header.module.css"
import classNames from "classnames"
import { pilowlava } from "@/app/fonts"

interface Props {
  title?: string
  accent?: string
}

const emptyRegex = /^\s*$/

function Header({ title, accent }: Props) {
  return (
    <h1 className={styles.header}>
      <span>₪</span>
      <span className={styles.headerText}>
        {!title?.match(emptyRegex) && (
          <span className={styles.title}>{title}</span>
        )}
        <span className={classNames(styles.accent, pilowlava.className)}>
          {accent}
        </span>
      </span>
      <span></span>
    </h1>
  )
}

export default Header

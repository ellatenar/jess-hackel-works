import * as React from "react"
import Image from "next/image"
import styles from "./Card.module.css"

export interface CardProps {
  title: string
  text?: string
  image: string
  link: string
}

function Card({ title, image, text, link }: CardProps) {
  return (
    <div className={styles.card}>
      <a href={link}>
        <Image
          src={image}
          alt={title}
          height={100}
          width={100}
          className={styles.cardImage}
        />
      </a>
      <div>
        <a href={link}>{title}</a>
      </div>
      {text && <div>{text}</div>}
    </div>
  )
}

export default Card

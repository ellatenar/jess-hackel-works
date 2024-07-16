import * as React from "react"
import Image from "next/image"
import styles from "./Card.module.css"

export interface CardProps {
  title: string
  text?: string
  image: string
  link: string
  date: string
}

function Card({ title, image, text, link, date }: CardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        height={100}
        width={100}
        className={styles.cardImage}
      />
      <div>
        <a href={link}>{title}</a>
      </div>
      <div>{date}</div>
      {text && <div>{text}</div>}
    </div>
  )
}

export default Card

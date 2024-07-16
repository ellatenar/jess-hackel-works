import * as React from "react"
import Image from "next/image"

export interface CardProps {
  image: string
  text: string
  link: string
  date: string
}

function Card({ image, text, link, date }: CardProps) {
  return (
    <div>
      <Image src={image} alt={text} />
      <div>
        <a href={link}>{text}</a>
      </div>
      <div>{date}</div>
    </div>
  )
}

export default Card

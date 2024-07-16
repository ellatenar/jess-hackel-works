import * as React from "react"
import Card, { CardProps } from "../Card"
import styles from "./Grid.module.css"

interface Props {
  cards: CardProps[]
}

function Grid({ cards }: Props) {
  return (
    <div className={styles.cardGrid}>
      {cards?.map(({ ...props }, idx) => (
        <Card key={idx} {...props} />
      ))}
    </div>
  )
}

export default Grid

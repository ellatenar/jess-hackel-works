import * as React from "react"
import { attributes, react as WorkContent } from "content/work.md"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"
import Grid from "../components/Grid"
import styles from "./Work.module.css"
import Markdown from "react-markdown"

export default function Work() {
  const { title, accent, projects, underGridContent } = attributes
  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <WorkContent />
        <Grid cards={projects} />
        <Markdown className={styles.underGridContent}>
          {underGridContent}
        </Markdown>
      </main>
      <Squiggles page="work" />
    </>
  )
}

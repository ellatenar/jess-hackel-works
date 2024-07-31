import * as React from "react"
import { attributes, react as WorkContent } from "content/work.md"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"
import Grid from "../components/Grid"
import styles from "./Work.module.css"
import Markdown from "react-markdown"

export default function Work() {
  const {
    title,
    accent,
    projects,
    projectsIntro,
    pressIntro,
    underGridContent,
  } = attributes
  return (
    <>
      <main className={styles.work}>
        <Header title={title} accent={accent} />
        <WorkContent />
        <Markdown className={styles.projectsIntro}>{projectsIntro}</Markdown>
        <Grid cards={projects} />
        <Markdown className={styles.pressIntro}>{pressIntro}</Markdown>
        <Markdown className={styles.underGridContent}>
          {underGridContent}
        </Markdown>
      </main>
      <Squiggles page="work" />
    </>
  )
}

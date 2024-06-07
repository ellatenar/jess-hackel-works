import * as React from "react"
import { attributes, react as ContactContent } from "content/contact.md"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"

export default function Contact() {
  const { title, accent } = attributes
  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <ContactContent />
      </main>
      <Squiggles page="contact" />
    </>
  )
}

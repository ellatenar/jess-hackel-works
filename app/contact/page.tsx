import * as React from "react"
import { attributes, react as ContactContent } from "content/contact.md"
import { SocialIcon } from "react-social-icons"

import Header from "../components/Header"
import Squiggles from "../components/Squiggles"

export default function Contact() {
  const { title, accent, urls } = attributes
  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <ContactContent />
        {urls.map((url: string) => (
          <SocialIcon key={url} url={url} />
        ))}
      </main>
      <Squiggles page="contact" />
    </>
  )
}

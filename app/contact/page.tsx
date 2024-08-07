import * as React from "react"
import { attributes, react as ContactContent } from "content/contact.md"
import { SocialIcon } from "react-social-icons"
import styles from "./Contact.module.css"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"

interface urlObj {
  url: string
}

export default function Contact() {
  const { title, accent, urls } = attributes
  return (
    <>
      <main className={styles.contact}>
        <Header title={title} accent={accent} />
        <ContactContent />
        <div className={styles.socialUrls}>
          {urls &&
            urls.map((url: urlObj) => (
              <SocialIcon
                key={url.url}
                url={url.url}
                network={url.url.includes("google") ? "clubhouse" : ""}
              />
            ))}
        </div>
      </main>
      <Squiggles page="contact" />
    </>
  )
}

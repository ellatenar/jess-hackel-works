import * as React from "react"
import { attributes, react as ContactContent } from "content/contact.md"
import { SocialIcon } from "react-social-icons"
import styles from "./Contact.module.css"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"

export default function Contact() {
  const { title, accent, urls } = attributes
  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <ContactContent />
        <div className={styles.socialUrls}>
          {urls &&
            urls.map((url: any) => <SocialIcon key={url.url} url={url.url} />)}
        </div>
      </main>
      <Squiggles page="contact" />
    </>
  )
}

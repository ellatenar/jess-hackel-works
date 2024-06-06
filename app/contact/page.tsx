import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import React from "react"

export default function Contact() {
  return (
    <div className="container">
      <Nav />
      <main>
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

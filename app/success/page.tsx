import React from "react"
import Nav from "../../components/Nav"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Contact() {
  return (
    <div className="container">
      <Nav />

      <main>
        <Header text="Contact me" />
        Form successfully submitted!
      </main>

      <Footer />
    </div>
  )
}

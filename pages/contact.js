import Head from "next/head"

import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Header text="Contact me" />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

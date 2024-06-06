import React from "react"

export const metadata = {
  title: "Jess Hackel",
  description: "TODO add description",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

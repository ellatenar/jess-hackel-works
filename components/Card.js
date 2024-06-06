import Link from "next/link"

export default function Card({ title, picture, link }) {
  return (
    <>
      <Link href={`/items/${link}`}>
        <div className="card">
          <div className="title">{title}</div>
          <div className="picture"></div>
        </div>
      </Link>
    </>
  )
}

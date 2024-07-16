import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      Home
    </div>
  )
}

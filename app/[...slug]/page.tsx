type Props = {
  params: {
    slug: string
  }
}

export default function Page({ params: { slug } }: Props) {
  return <div>Dynamic: {slug}</div>
}

export function generateStaticParams() {
  return [{ slug: ['first'] }, { slug: ['second'] }]
}

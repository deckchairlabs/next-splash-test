'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { useCookie } from 'react-use'

type DismissProps = {
  cookieKey: string
}

export default function Dismiss({ cookieKey }: DismissProps) {
  const [, setCookie] = useCookie(cookieKey)
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()

      setCookie('0', {
        expires: 365,
      })

      router.refresh()
    },
    [router, setCookie]
  )

  return (
    <Link href={pathname} onClick={handleClick}>
      Dismiss
    </Link>
  )
}

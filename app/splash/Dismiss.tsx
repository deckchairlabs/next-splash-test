'use client'
import { useRouter } from 'next/navigation'
import { FormEvent, useCallback } from 'react'
import { useCookie } from 'react-use'

type DismissProps = {
  cookieKey: string
}

export default function Dismiss({ cookieKey }: DismissProps) {
  const [, setCookie] = useCookie(cookieKey)
  const router = useRouter()

  const handleSubmit = useCallback(
    (event: FormEvent) => {
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
    <form onSubmit={handleSubmit}>
      <button type="submit">Dismiss</button>
    </form>
  )
}

import { Portugues } from "../typings"

export const fetchPortugues = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPortugues`
  )

  const data = await res.json()
  const pt: Portugues = data.pt

  return pt
}

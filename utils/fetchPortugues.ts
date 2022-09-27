import { Portugues } from "../typings"

export const fetchPortugues = async () => {
  const res = await fetch(`http://localhost:3000/api/getPortugues`)

  const data = await res.json()
  const pt: Portugues = data.pt

  return pt
}

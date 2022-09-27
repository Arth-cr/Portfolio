import { English } from "../typings"

export const fetchEnglish = async () => {
  const res = await fetch(`http://localhost:3000/api/getEnglish`)

  const data = await res.json()
  const en: English = data.en

  return en
}

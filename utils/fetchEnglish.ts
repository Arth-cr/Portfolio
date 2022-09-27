import { English } from "../typings"

export const fetchEnglish = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEnglish`)

  const data = await res.json()

  const en: English = data.english

  return en
}

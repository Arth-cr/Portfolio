import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { English } from "../../typings"

const query = groq`
    *[_type == "en"][0] {
      ...,
      experiences[] -> {..., technologies[] ->},
      pageInfos->,
      projects[]-> {..., technologies[] ->}
    }
`

type Data = {
  english: English
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const english: English = await sanityClient.fetch(query)
  res.status(200).json({ english })
}

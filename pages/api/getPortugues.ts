import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { Portugues } from "../../typings"

const query = groq`
    *[_type == "pt"][0] {
      ...,
      experiences[] -> {..., technologies[] ->},
      pageInfos->,
      projects[]-> {..., technologies[] ->}
    }
`

type Data = {
  pt: Portugues
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pt: Portugues = await sanityClient.fetch(query)
  res.status(200).json({ pt })
}

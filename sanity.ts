import { createClient } from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
  dataset: "production" || "production",
  projectId: "hk2frivp"!,
  apiVersion: "2022-03-25",
  useCdn: "production" !== "production",
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source)

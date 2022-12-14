import Link from "next/link"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { PageInfo } from "../typings"
import BackgroundCircles from "./BackgroundCircles"
import { urlFor } from "./../sanity"

type Props = {
  pageInfo?: PageInfo
  language: boolean
}

function Hero({ pageInfo, language }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `${
        language
          ? `Hello, I'm ${pageInfo?.name}`
          : `Olá, me chamo ${pageInfo?.name}`
      }`,
      `${language ? `Be-Welcome.tsx` : `Seja-bem-vindo.tsx`}`,
      `${language ? `<HopeYouLike />` : `<EsperoQueGoste />`}`,
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#70e000" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">
              {language ? "About" : "Sobre"}
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">
              {language ? "Experience" : "Experiência"}
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">
              {language ? "Skills" : "Habilidades"}
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">
              {language ? "Projects" : "Projetos"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

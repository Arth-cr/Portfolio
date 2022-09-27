import React, { Dispatch, SetStateAction, useState } from "react"
import { SocialIcon } from "react-social-icons"

import { motion } from "framer-motion"
import Link from "next/link"
import { Social } from "../typings"

type Props = {
  socials: Social[]
  language: Dispatch<SetStateAction<boolean>>
}

function Header({ socials, language }: Props) {
  const [languages, setLanguages] = useState<boolean>(false)

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials?.map((social) => {
          return (
            <SocialIcon
              key={social?._id}
              url={social?.url}
              fgColor="#70e000"
              bgColor="transparent"
              className="hover:opacity-50 transition-opacity duration-200"
            />
          )
        })}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-my-green cursor-pointer"
      >
        <div className="flex group items-center justify-center w-auto mr-4 group-hover:opacity-50 transition-opacity duration-200">
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                onChange={() => {
                  setLanguages(!languages)
                  language(languages)
                }}
                type="checkbox"
                id="toggleB"
                className="sr-only"
              />
              <div className="block group-hover:bg-my-green/40 transition-all duration-200 bg-my-green/80 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-[rgb(36,36,36)] w-6 h-6 rounded-full transition flex items-center justify-center text-my-green"></div>
            </div>
          </label>
        </div>

        <Link href="#contact">
          <div className="hover:opacity-50 transition-opacity duration-200">
            <SocialIcon
              className="cursor-pointer group-hover:opacity-50 transition-opacity duration-200"
              network="email"
              fgColor="#70e000"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-my-green group-hover:opacity-50 transition-opacity duration-200">
              Entrar em contato
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header

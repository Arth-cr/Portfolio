import React from "react"
import { SocialIcon } from "react-social-icons"

import { motion } from "framer-motion"
import Link from "next/link"
import { Social } from "../typings"

type Props = {
  socials: Social[]
}

function Header({ socials }: Props) {
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

      <Link href="#contact">
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
          className="flex group flex-row items-center text-my-green cursor-pointer group-hover:opacity-50 transition-opacity duration-200"
        >
          <SocialIcon
            className="cursor-pointer group-hover:opacity-50 transition-opacity duration-200"
            network="email"
            fgColor="#70e000"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-my-green group-hover:opacity-50 transition-opacity duration-200">
            Entrar em contato
          </p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header

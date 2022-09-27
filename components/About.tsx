import React from "react"
import { motion } from "framer-motion"
import { PageInfo } from "./../typings.d"
import { urlFor } from "./../sanity"

type Props = {
  pageInfo?: PageInfo
  language: boolean
}

function About({ pageInfo, language }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col text-center md:text-left max-w-7xl px-10 justify-between mx-auto items-center gap-y-16"
    >
      <div className="flex items-center justify-center mt-16">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          {language ? "About" : "Sobre"}
        </h3>
      </div>
      <div className="flex items-center flex-col md:flex-row">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.profilePic).url()}
          className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            {language ? (
              <>
                A{" "}
                <span className="underline decoration-my-green/50">little</span>{" "}
                about me
              </>
            ) : (
              <>
                Um{" "}
                <span className="underline decoration-my-green/50">pouco</span>{" "}
                sobre mim
              </>
            )}
          </h4>
          <p className="text-base">{pageInfo?.backgroundInformation}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About

import React from "react"
import { motion } from "framer-motion"
import { PageInfo } from "./../typings.d"
import { urlFor } from "./../sanity"

type Props = {
  pageInfo?: PageInfo
}

function About({ pageInfo }: Props) {
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
      className="flex flex-col relative  md:top-0  h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
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
          className="mb-20 relative top-8 xl:top-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Um <span className="underline decoration-my-green/50">pouco</span>{" "}
            sobre mim
          </h4>
          <p className="text-base">{pageInfo?.backgroundInformation}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About

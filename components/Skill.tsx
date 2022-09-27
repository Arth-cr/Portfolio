import React from "react"
import { motion } from "framer-motion"
import { Skill } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  skill: Skill
  directionleft?: boolean
}

const Skill = ({ directionleft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionleft ? -50 : 50,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className="rounded-full border bg-white border-gray-500 object-contain w-20 h-20 filter group-houver:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill

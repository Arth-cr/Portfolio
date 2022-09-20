import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from "./../typings.d"

type Props = {
  experiences: Experience[]
}

function WorkExperience({ experiences }: Props) {
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
      className=" flex h-fit xl:h-[100%] relative top-20 overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <div className="w-full flex space-x-5 overflow-x-scroll px-10 pb-4 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-my-green/80 scrollbar-thin ">
        {experiences.map((experience) => {
          return (
            <ExperienceCard key={experience?._id} experience={experience} />
          )
        })}
      </div>
    </motion.div>
  )
}

export default WorkExperience

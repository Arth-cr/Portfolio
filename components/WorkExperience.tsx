import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from "./../typings.d"

type Props = {
  experiences: Experience[]
  language: boolean
}

function WorkExperience({ experiences, language }: Props) {
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
      className=" flex flex-col overflow-hidden text-left max-w-full px-10 justify-between mx-auto items-center gap-y-16"
    >
      <div className="flex items-center justify-center mt-16">
        <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl">
          {language ? "Experience" : "Experiência"}
        </h3>
      </div>
      <div className="w-full flex space-x-5 overflow-x-scroll px-10 pb-4 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-my-green/80 scrollbar-thin ">
        {experiences.map((experience) => {
          return (
            <ExperienceCard
              key={experience?._id}
              experience={experience}
              language={language}
            />
          )
        })}
      </div>
    </motion.div>
  )
}

export default WorkExperience

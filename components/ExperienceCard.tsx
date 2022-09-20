import React from "react"
import { motion } from "framer-motion"
import { Experience } from "../typings"
import { urlFor } from "./../sanity"

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shkink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll overflow-x-visible h-[80vh] xl:h-[80%] min-w-min scrollbar-track-gray-400/20 scrollbar-thumb-[#333333]/80 scrollbar-thin">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h[200px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2 flex-wrap">
          {experience.technologies.map((technologie) => {
            return (
              <img
                className="h-10 w-10 rounded-full object-contain"
                src={urlFor(technologie.image).url()}
                alt={technologie.title}
                key={technologie._id}
              />
            )
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toLocaleDateString("pt-br")} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Atualmente"
            : new Date(experience.dateEnded).toLocaleDateString("pt-br")}
        </p>

        <ul className="list-disc list-inside space-y-4 ml-5 text-lg">
          {experience.points.map((point, i) => {
            return <li key={i}>{point}</li>
          })}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard

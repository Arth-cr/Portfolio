import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Skill as SkillType } from "../typings"

type Props = {
  skills: SkillType[]
  language: boolean
}

function Skills({ skills, language }: Props) {
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
      className="flex flex-col relative text-center md:text-left max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center h-[100%] gap-y-16"
    >
      <div className="flex flex-col items-center justify-center mt-16">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          {language ? "Skills" : "Habilidades"}
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 tsxt-sm">
          {language
            ? "Mouse hover to see my skill level :)"
            : "Passe o mouse para ver meu nível de conhecimento de cada habilidade :)"}
        </h3>
      </div>

      <div className="max-w-md grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => {
          return <Skill skill={skill} key={Math.random()} />
        })}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => {
          return <Skill skill={skill} key={Math.random()} directionleft />
        })}
      </div>
    </motion.div>
  )
}

export default Skills

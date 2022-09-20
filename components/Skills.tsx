import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Skill as SkillType } from "../typings"

type Props = {
  skills: SkillType[]
}

function Skills({ skills }: Props) {
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
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center h-[100%]"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Habilidades
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 tsxt-sm">
        Passe o mouse para ver meu nível de conhecimento de cada habilidade :)
      </h3>

      <div className="max-w-md grid grid-cols-4 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => {
          return <Skill skill={skill} key={skill._id} />
        })}
        {skills.slice(skills.length / 2, skills.length).map((skill) => {
          return <Skill skill={skill} key={skill._id} directionleft />
        })}
      </div>
    </motion.div>
  )
}

export default Skills

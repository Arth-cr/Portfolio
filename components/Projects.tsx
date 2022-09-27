import React from "react"
import { motion } from "framer-motion"
import { Project } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  projects: Project[]
  languages: boolean
}

const Projects = ({ projects, languages }: Props) => {
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
      className="relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0 gap-y-16"
    >
      <div className="flex items-center justify-center mt-16">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          {languages ? "Projects" : "Projetos"}
        </h3>
      </div>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-my-green/80 scrollbar-thin">
        {projects?.map((project, i) => {
          return (
            <div
              key={project?._id}
              className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-20 md:px-44 pb-8"
            >
              <motion.img
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt=""
                className="w-full h-[25%] md:w-[50%] md:h-[60%]  object-cover"
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  {languages ? (
                    <>
                      <span className="underline decoration-my-green/50">
                        Project {i + 1} of {projects?.length}:
                      </span>{" "}
                      {project?.title}
                    </>
                  ) : (
                    <>
                      <span className="underline decoration-my-green/50">
                        Projeto {i + 1} de {projects?.length}:
                      </span>{" "}
                      {project?.title}
                    </>
                  )}
                </h4>

                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies?.map((technologie) => {
                    return (
                      <img
                        className="h-10 w-10 rounded-full object-contain"
                        src={urlFor(technologie?.image).url()}
                        alt={technologie?.title}
                        key={technologie?._id}
                      />
                    )
                  })}
                </div>
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          )
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-my-green/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects

import { useState } from "react"
import type { GetStaticProps } from "next"
import Head from "next/head"
import Hero from "../components/Hero"
import Header from "./../components/Header"
import About from "./../components/About"
import WorkExperience from "./../components/WorkExperience"
import Skills from "./../components/Skills"
import Projects from "./../components/Projects"
import ContactMe from "./../components/ContactMe"
import Link from "next/link"
import { ArrowUturnUpIcon } from "@heroicons/react/24/solid"
import {
  English,
  Experience,
  PageInfo,
  Portugues,
  Project,
  Skill,
  Social,
} from "../typings"
import { fetchPageInfo } from "./../utils/fetchPageInfo"
import { fetchExperiences } from "./../utils/fetchExperience"
import { fetchSkills } from "./../utils/fetchSkills"
import { fetchProjects } from "./../utils/fetchProjects"
import { fetchSocials } from "./../utils/fetchSocials"
import { fetchPortugues } from "../utils/fetchPortugues"
import { fetchEnglish } from "../utils/fetchEnglish"

type Props = {
  pageInfo?: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
  english: English
  portugues: Portugues
}

const Home = ({ skills, socials, english, portugues }: Props) => {
  const [language, setLanguage] = useState<boolean>(true)

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-my-green/80 scrollbar-thin">
      <Head>
        <title>Arthur Ribeiro - Portfólio</title>
      </Head>

      <Header socials={socials} language={setLanguage} />

      {/* Hero */}
      <section id="hero">
        <Hero
          pageInfo={language ? english.pageInfos : portugues.pageInfos}
          language={language}
        />
      </section>

      {/* About */}
      <section id="about">
        <About
          pageInfo={language ? english.pageInfos : portugues.pageInfos}
          language={language}
        />
      </section>

      {/* Experience */}

      <section id="experience">
        <WorkExperience
          experiences={language ? english.experiences : portugues.experiences}
          language={language}
        />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills skills={skills} language={language} />
      </section>

      {/* Projects */}

      <section id="projects">
        <Projects
          projects={language ? english.projects : portugues.projects}
          languages={language}
        />
      </section>

      {/* Contact Me */}

      <section id="contact">
        <ContactMe language={language} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUturnUpIcon className="h-5 w-5 rounded-full filter grayscale hover:grayscale-0 cursor-pointer text-my-green" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()
  const portugues: Portugues = await fetchPortugues()
  const english: English = await fetchEnglish()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      portugues,
      english,
    },
    revalidate: 10,
  }
}

export default Home

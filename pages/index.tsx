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
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchPageInfo } from "./../utils/fetchPageInfo"
import { fetchExperiences } from "./../utils/fetchExperience"
import { fetchSkills } from "./../utils/fetchSkills"
import { fetchProjects } from "./../utils/fetchProjects"
import { fetchSocials } from "./../utils/fetchSocials"

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Home = ({ experiences, pageInfo, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y  overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-my-green/80 scrollbar-thin">
      <Head>
        <title>Arthur Ribeiro - Portfólio</title>
      </Head>

      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="h-screen snap-start">
        <div className="flex items-center justify-center">
          <h3 className="relative top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
            Sobre
          </h3>
        </div>
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}

      <section id="experience" className="h-screen snap-start">
        <div className="flex items-center justify-center">
          <h3 className="relative top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experiência
          </h3>
        </div>
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="h-screen snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}

      <section id="projects" className="h-screen snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}

      <section id="contact" className="h-screen snap-start">
        <ContactMe />
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

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    fallback: false,
    revalidate: 60 * 60 * 24 * 7,
  }
}

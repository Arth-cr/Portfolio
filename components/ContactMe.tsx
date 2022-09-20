import React from "react"
import { motion } from "framer-motion"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:arthur.carvalho@outlook.com.br?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  }
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
      className="h-[100%] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contato
      </h3>

      <div className="relative top-5 flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Achou interessante?{" "}
          <span className="decoration-my-green underline">
            Vamos conversar!!
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-my-green h-7 w-7 animate-pulse" />
            <p className="text-2xl">+55 (24) 99273-7470</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-my-green h-7 w-7 animate-pulse" />
            <p className="text-2xl">Arthur.Carvalho@outlook.com.br</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-full mx-auto max-w-[100vw] px-2"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Nome"
                className="contactInput"
                type="text"
              />
              <input
                {...register("subject")}
                placeholder="Assunto"
                className="contactInput"
                type="text"
              />
            </div>

            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />

            <textarea
              {...register("message")}
              placeholder="Mensagem"
              className="contactInput"
            />

            <button
              type="submit"
              className="bg-my-green py-5 px-10 rounded-md text-black font-bold text-lg hover:opacity-50 transition-opacity duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactMe

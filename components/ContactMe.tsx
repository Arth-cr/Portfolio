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

type Props = {
  language: boolean
}

const ContactMe = ({ language }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:arthur.carvalho@outlook.com.br?subject=${
      formData.subject
    }&body=${
      language
        ? `Hi, my name is ${formData.name}. ${formData.message}`
        : `Oi, meu nome é ${formData.name}. ${formData.message}`
    }`
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
      className="flex mb-20 flex-col text-left max-w-full justify-evenly mx-auto items-center z-0 gap-y-16"
    >
      <div className="flex items-center justify-center mt-16">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
          {language ? "Contact" : "Contato"}
        </h3>
      </div>

      <div className="relative top-5 flex flex-col space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          {language ? (
            <>
              Did you find it interesting?{" "}
              <span className="decoration-my-green underline">
                Let's talk!!
              </span>
            </>
          ) : (
            <>
              Achou interessante?{" "}
              <span className="decoration-my-green underline">
                Vamos conversar!!
              </span>
            </>
          )}
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-my-green h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+55 (24) 99273-7470</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-my-green h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">
              Arthur.Carvalho@outlook.com.br
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-full mx-auto max-w-[100vw] px-3"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder={`${language ? "Name" : "Nome"}`}
                className="contactInput"
                type="text"
              />
              <input
                {...register("subject")}
                placeholder={`${language ? "Subject" : "Assunto"}`}
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
              placeholder={`${language ? "Message" : "Mensagem"}`}
              className="contactInput"
            />

            <button
              type="submit"
              className="bg-my-green py-5 px-10 rounded-md text-black font-bold text-lg hover:opacity-50 transition-opacity duration-200"
            >
              {`${language ? "Submit" : "Enviar"}`}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactMe

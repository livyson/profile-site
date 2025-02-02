import Image from "next/image"
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="João Silva"
            width={400}
            height={400}
            className="rounded-full border-4 border-blue-400"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-4xl font-bold mb-4">João Silva</h1>
          <h2 className="text-2xl text-blue-400 mb-4">Technology Manager</h2>
          <p className="mb-6">
            Experienced technology manager with a passion for innovation and leadership. Driving digital transformation
            and delivering cutting-edge solutions.
          </p>
          <div className="flex space-x-4 mb-6">
            <a
              href="/cv-pt.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Download CV (PT)
            </a>
            <a
              href="/cv-en.pdf"
              download
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Download CV (EN)
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-400 transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a href="mailto:joao@example.com" className="text-2xl hover:text-red-400 transition-colors">
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/joaosilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


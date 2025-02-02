"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    if (Object.values(formData).some((field) => field.trim() === "")) {
      setError("Por favor, preencha todos os campos obrigatórios.")
      setSuccessMessage("")
      return
    }

    setError("")

    const data = {
      ...formData,
      to: "livyson@gmail.com",
      subject: "Contact Form Submission",
    }
    console.log("Form submitted:", data)

    setSuccessMessage("Mensagem enviada com sucesso!")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="w-full bg-black pt-12 pb-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl font-bold text-primary">Fale Comigo</h2>
          {error && (
            <p className="mb-4 text-center text-red-500" role="alert">
              {error}
            </p>
          )}
          {successMessage && (
            <p className="mb-4 text-center text-green-500" role="alert">
              {successMessage}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">
                Nome <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="border-gray-800 bg-gray-900 text-white placeholder:text-gray-400"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
              />
              {isSubmitted && formData.name.trim() === "" && (
                <p className="mt-1 text-xs text-red-500">Este campo é obrigatório</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="border-gray-800 bg-gray-900 text-white placeholder:text-gray-400"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {isSubmitted && formData.email.trim() === "" && (
                <p className="mt-1 text-xs text-red-500">Este campo é obrigatório</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-200">
                Telefone <span className="text-red-500">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                className="border-gray-800 bg-gray-900 text-white placeholder:text-gray-400"
                placeholder="(11) 98765-4321"
                value={formData.phone}
                onChange={handleChange}
              />
              {isSubmitted && formData.phone.trim() === "" && (
                <p className="mt-1 text-xs text-red-500">Este campo é obrigatório</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-200">
                Mensagem <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className="min-h-[150px] border-gray-800 bg-gray-900 text-white placeholder:text-gray-400"
                placeholder="Sua mensagem..."
                value={formData.message}
                onChange={handleChange}
              />
              {isSubmitted && formData.message.trim() === "" && (
                <p className="mt-1 text-xs text-red-500">Este campo é obrigatório</p>
              )}
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}


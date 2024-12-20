'use client'

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { CheckCircle, XCircle, MapPin, Clock, Phone, Mail, Loader2 } from 'lucide-react'

const CustomToast = ({ message, type }: { message: string; type: 'success' | 'error' }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className={`${type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white p-4 rounded-lg shadow-lg flex items-center`}
  >
    {type === 'success' ? (
      <CheckCircle className="w-6 h-6 mr-2" />
    ) : (
      <XCircle className="w-6 h-6 mr-2" />
    )}
    <span className="font-medium">{message}</span>
  </motion.div>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      console.log(result.text)
      toast.custom((t) => (
        <CustomToast message="Message sent successfully! We'll get back to you soon." type="success" />
      ), { duration: 5000 })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error('Error sending email:', error)
      toast.custom((t) => (
        <CustomToast message="Failed to send message. Please try again later." type="error" />
      ), { duration: 5000 })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: 'transparent',
            boxShadow: 'none',
          },
        }}
      />
      <HeroSection />
      <ContactInfoSection />
      <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
      <MapSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/contact-image.jpg"
        alt="Contact Us"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-shadow-md max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We&apos;re here to answer any questions you may have about our services. Reach out to us and let&apos;s start a conversation about how we can help your business grow.
        </motion.p>
      </div>
    </section>
  )
}

function ContactInfoSection() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ContactInfoItem
            icon={MapPin}
            title="Address"
            content="100 Carr St, Newtown, Johannesburg, 2113"
          />
          <ContactInfoItem
            icon={Clock}
            title="Trading Hours"
            content="09:00 AM - 22:00 PM"
          />
          <ContactInfoItem
            icon={Phone}
            title="Phone"
            content="+27 69 639 9467"
          />
          <ContactInfoItem
            icon={Mail}
            title="Email"
            content="sales@dotcommediahouse.com"
          />
        </div>
      </div>
    </section>
  )
}

function ContactInfoItem({ icon: Icon, title, content }: { icon: React.ElementType, title: string, content: string }) {
  return (
    <motion.div
      className="flex items-center space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm sm:text-base">{content}</p>
      </div>
    </motion.div>
  )
}

function ContactForm({ formData, handleChange, handleSubmit, isSubmitting }: {
  formData: { name: string; email: string; message: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Send Us a Message
        </motion.h2>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-2xl">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-300">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-300">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-300">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                rows={6}
                disabled={isSubmitting}
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={isSubmitting ? 'submitting' : 'idle'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </motion.div>
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="py-12 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Us
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-75"></div>
            <div className="relative p-2">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.867202073981!2d28.02964867616679!3d-26.200997863844815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950ea0617216c3%3A0x1a51dd8f0187aa19!2sNewtown%20Junction%20Mall!5e0!3m2!1sen!2sza!4v1729555286143!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-inner"
                  title="Dot Com Media House Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-base sm:text-lg text-gray-300">
              Visit us at our office in Newtown Junction Mall
            </p>
            <p className="text-sm text-gray-400 mt-2">
              100 Carr St, Newtown, Johannesburg, 2113
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
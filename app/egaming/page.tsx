'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import { ArrowRight, Gamepad } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EGaming() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <VibeGamingSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/egaming-img.jpg"
        alt="E-Gaming background"
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
          Experience the Future of Gaming
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Immersive • Interactive • Unforgettable
        </motion.p>
      </div>
    </section>
  )
}

function VibeGamingSection() {
  const features = [
    "Mall Activations",
    "Street Activations",
    "Private Event Bookings",
    "Customizable Gaming Experiences",
    "State-of-the-Art Equipment",
    "Professional Staff",
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Vibe Gaming Mobile Booth</h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Experience gaming like never before with our state-of-the-art Vibe Gaming mobile booth. Perfect for events,
              activations, and private bookings.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Gamepad className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200">
              Book Now <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg"
              alt="Vibe Gaming Mobile Booth"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
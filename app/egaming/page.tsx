'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { ArrowRight, Gamepad, Gamepad2, Headphones, Joystick, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EGaming() {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <VibeGamingSection />
      <VibeGamingShopSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/egaming-img.jpg"
          alt="E-Gaming background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience The Vibe Gaming
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6"
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
    <section className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">The Vibe Gaming Mobile Booth</h2>
            <p className="text-base lg:text-lg mb-6">
              Experience gaming like never before with our state-of-the-art Vibe Gaming mobile booth. Perfect for events,
              activations, and private bookings.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-sm md:text-base group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Gamepad className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                  <span className="group-hover:text-blue-400 transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Button 
              asChild
              size="lg" 
              className="w-full sm:w-auto bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              <Link href="/contact">
                Book Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video">
              <Image
                src="/gallery-images/gallery-image-landscape4.jpg"
                alt="Vibe Gaming Mobile Booth"
                fill
                className="rounded-lg shadow-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function VibeGamingShopSection() {
  const shopFeatures = [
    { icon: Gamepad2, text: "Latest Gaming Consoles" },
    { icon: Joystick, text: "Racing Simulators" },
    { icon: Headphones, text: "Immersive VR Experiences" },
    { icon: Gamepad, text: "Pool Table" },
    { icon: Gamepad, text: "Wide Selection of Games" },
    { icon: Music, text: "Regular DJ & Music Events" },
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          The Vibe Gaming Shop at Newtown Junction Mall
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video">
              <Image
                src="/shop.jpg"
                alt="The Vibe Gaming Shop"
                fill
                className="rounded-lg shadow-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-base lg:text-lg mb-6">
              Experience the ultimate gaming destination at our Newtown Junction Mall location. 
              Whether you&apos;re a casual gamer or a pro, we&apos;ve got something for everyone.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {shopFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-sm md:text-base group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <feature.icon className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                  <span className="group-hover:text-blue-400 transition-colors">{feature.text}</span>
                </motion.li>
              ))}
            </ul>
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              <Link href="/contact">
                Visit Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
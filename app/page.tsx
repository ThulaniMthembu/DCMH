'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { ArrowRight, Eye, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <ActivationSection />
      <CtaSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <Image
        src="/homepage-img.jpeg"
        alt="Hero background"
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
          Welcome to Dot Com Media House
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bringing Your Services and Products to Life
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
            <Link href="/contact">Experience the Difference <ArrowRight className="ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { 
      icon: Eye, 
      title: "Activations", 
      description: "We create atmospheres that engage your market, demonstrating the value of your services." 
    },
    { 
      icon: Users, 
      title: "One-on-One Marketing", 
      description: "Our team provides personalized interactions for effective brand awareness and sales." 
    },
    { 
      icon: MapPin, 
      title: "Flexible Locations", 
      description: "From corners to parks to townships, we reach the unreachable." 
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Unique Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-blue-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActivationSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Activation Package</h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Our activation package goes beyond traditional marketing. We bring your products and services to life, 
              creating memorable experiences that resonate with your audience.
            </p>
            <ul className="list-disc list-inside mb-6 text-sm sm:text-base">
              <li>Gather valuable leads</li>
              <li>Answer and collect FAQs</li>
              <li>Drive sales effectively</li>
              <li>Increase brand loyalty</li>
            </ul>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
              <Link href="/services">Learn More <ArrowRight className="ml-2" /></Link>
            </Button>
          </motion.div>
          <motion.div
            className="lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/activation.jpg"
              alt="Activation Package"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Bring Your Brand to Life?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Let&apos;s create engaging experiences that drive results for your business.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
              <Link href="/contact">Contact Us <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/ceo-img.jpg"
              alt="Dot Com Media House Team"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
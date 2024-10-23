'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { ArrowRight, Eye, Users, MapPin, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
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
        fill
        priority
        quality={100}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Dot Com Media House
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-shadow-md"
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
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <Link href="/contact">
              Experience the Difference 
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
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
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Unique Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 text-blue-500" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">{service.title}</h3>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Activation Package</h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              Our activation package goes beyond traditional marketing. We bring your products and services to life, 
              creating memorable experiences that resonate with your audience.
            </p>
            <ul className="list-disc list-inside mb-6 text-sm sm:text-base">
              <li className="hover:text-blue-400 transition-colors duration-300">Gather valuable leads</li>
              <li className="hover:text-blue-400 transition-colors duration-300">Answer and collect FAQs</li>
              <li className="hover:text-blue-400 transition-colors duration-300">Drive sales effectively</li>
              <li className="hover:text-blue-400 transition-colors duration-300">Increase brand loyalty</li>
            </ul>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              <Link href="/services">
                Learn More 
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            className="lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src="/activation.jpg"
                alt="Activation Package"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Bring Your Brand to Life?</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
              Let&apos;s create engaging experiences that drive results for your business.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              <Link href="/contact">
                Contact Us 
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative max-w-lg mx-auto">
            <motion.div 
              className="aspect-video"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <video
                ref={videoRef}
                src="/videos/homepage-vid.mp4"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
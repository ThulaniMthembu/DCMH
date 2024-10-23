'use client'

import { motion } from "framer-motion"
import { ArrowRight, Megaphone, MapPin, Truck, Users, Eye, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

export default function Services() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <ActivationSection />
      <ProcessSection />
      <CtaSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <Image
        src="/services-img.jpg"
        alt="Services background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bringing Your Brand to Life Through Innovative Activations
        </motion.p>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { 
      icon: Megaphone, 
      title: "Brand Activation", 
      description: "We create engaging atmospheres that bring your brand to life and connect directly with your target audience." 
    },
    { 
      icon: MapPin, 
      title: "Strategic Locations", 
      description: "We help you penetrate those hard-to-reach areas - parks, townships, and corners you've always wanted to explore." 
    },
    { 
      icon: Truck, 
      title: "Mobile Advertising", 
      description: "Our moving ads go anywhere, ensuring your message reaches even the most remote locations." 
    },
    { 
      icon: Eye, 
      title: "Visual Impact", 
      description: "Like a billboard, we make your brand seen. But we go beyond visibility to create memorable experiences." 
    },
    { 
      icon: Users, 
      title: "Direct Engagement", 
      description: "We facilitate one-on-one interactions between your brand and potential customers, driving real connections." 
    },
    { 
      icon: Zap, 
      title: "Vibe Gaming", 
      description: "Our unique EGaming service adds an extra dimension of engagement to events and activations." 
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">What We Offer</h2>
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
              <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-blue-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
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
    <section className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Activation Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Promotional Spaces</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Our team combines creative branding with one-on-one activations, providing a more effective means of marketing, brand awareness, and sales driving.
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base">
              {['Gather valuable leads', 'Answer and collect FAQs', 'Drive immediate sales', 'Increase brand loyalty'].map((item, index) => (
                <li key={index} className="hover:text-blue-400 transition-colors duration-300">{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Flexible Solutions</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              We offer a range of flexible, affordable, and effective solutions to meet your brand activation needs:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base">
              {['Park and Sell opportunities', 'Moving ads that go anywhere', 'Strategic location targeting', 'Customized activation experiences'].map((item, index) => (
                <li key={index} className="hover:text-blue-400 transition-colors duration-300">{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { title: "Consultation", description: "We start by understanding your brand, goals, and target audience." },
    { title: "Strategy Development", description: "Our team crafts a tailored activation strategy to meet your objectives." },
    { title: "Creative Execution", description: "We bring your brand to life through engaging and memorable experiences." },
    { title: "Measurement & Optimization", description: "We analyze results and optimize for maximum impact and ROI." },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Activate Your Brand?</h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8">
          Let&apos;s create engaging experiences that resonate with your audience and drive real results.
        </p>
        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
          <Link href="/contact">
            Get Started 
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
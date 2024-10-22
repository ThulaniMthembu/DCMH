'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import { Calendar, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <CompanyBackground />
      <TeamSection />
      <MissionSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/about-img.jpg"
        alt="About Dot Com Media House"
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
          About Dot Com Media House
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Innovating the Future of Media Since 2021
        </motion.p>
      </div>
    </section>
  )
}

function CompanyBackground() {
  const milestones = [
    { icon: Calendar, title: "Established", description: "Founded in 2021" },
    { icon: Users, title: "Experience", description: "Over 10 years in marketing and sales" },
    { icon: TrendingUp, title: "Growth", description: "Rapidly expanding client base" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Journey</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <milestone.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-blue-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{milestone.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const teamMembers = [
    { name: "John Doe", role: "Founder & CEO", image: "/placeholder.svg" },
    { name: "Jane Smith", role: "Creative Director", image: "/placeholder.svg" },
    { name: "Mike Johnson", role: "Head of Events", image: "/placeholder.svg" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm sm:text-base text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              At Dot Com Media House, we&apos;re on a mission to revolutionize the media landscape. With our unique blend of
              advertising expertise, event management prowess, and branding innovation, we&apos;re helping businesses connect with
              their audiences in meaningful and memorable ways.
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Our team of seasoned professionals brings over a decade of experience in marketing and sales to every project,
              ensuring that our clients receive cutting-edge solutions that drive results.
            </p>
            <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200">
              Join Our Journey
            </Button>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg"
              alt="Dot Com Media House Team"
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
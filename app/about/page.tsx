'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import { Calendar, TrendingUp, Users, Target, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <CompanyBackground />
      <OurApproach />
      <MissionSection />
      <AchievementsSection />
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
    { icon: Calendar, title: "Established", description: "Founded in 2021 with a vision to revolutionize media marketing" },
    { icon: Users, title: "Experience", description: "Over 10 years of combined expertise in marketing, events, and branding" },
    { icon: TrendingUp, title: "Growth", description: "Rapidly expanding client base across diverse industries" },
    { icon: Globe, title: "Reach", description: "Serving clients nationwide with innovative media solutions" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Journey</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
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

function OurApproach() {
  const approaches = [
    { 
      icon: Target, 
      title: "Targeted Strategies", 
      description: "We develop customized marketing strategies that precisely target your audience, ensuring maximum impact and ROI." 
    },
    { 
      icon: Zap, 
      title: "Innovative Solutions", 
      description: "Our team constantly explores cutting-edge technologies and trends to keep your brand ahead of the curve." 
    },
    { 
      icon: Users, 
      title: "Client-Centric Focus", 
      description: "We prioritize your unique needs and goals, tailoring our services to align perfectly with your vision." 
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <approach.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-blue-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{approach.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{approach.description}</p>
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
        <div className="max-w-3xl mx-auto text-center">
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
          <Button asChild size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300">
            <Link href="/contact">
              Join Our Journey
              <TrendingUp className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  const achievements = [
    { number: "100+", description: "Successful Campaigns" },
    { number: "500K+", description: "People Reached" },
    { number: "200+", description: "Events Managed" },
    { number: "95%", description: "Client Satisfaction" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-2">{achievement.number}</h3>
              <p className="text-sm sm:text-base text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
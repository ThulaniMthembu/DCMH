'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Gamepad2, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Gamepad2 className="w-24 h-24 mx-auto mb-6 text-blue-500" />
        </motion.div>
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Game Over! The level you&apos;re looking for doesn&apos;t exist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <Link href="/">
              Continue to Home <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
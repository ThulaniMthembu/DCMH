'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GamerLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setIsVisible(false)
    }

    const loadTimer = setTimeout(() => {
      if (document.readyState === 'complete') {
        setIsVisible(false)
      } else {
        // If the document is not complete after 4 seconds, we'll check again after 1 more second
        const slowConnectionTimer = setTimeout(() => {
          setIsVisible(document.readyState !== 'complete')
        }, 1000)

        return () => clearTimeout(slowConnectionTimer)
      }
    }, 4000)

    window.addEventListener('load', handleLoad)

    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      clearTimeout(loadTimer)
      window.removeEventListener('load', handleLoad)
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 mb-4 sm:mb-6">
            <motion.div
              className="absolute inset-0 border-4 border-blue-500 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-red-500 rounded-full"
              animate={{
                rotate: -360,
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-4 border-4 border-green-500 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full" />
            </motion.div>
          </div>
          <motion.p
            className="text-white text-lg sm:text-2xl font-bold mt-5 sm:mt-7"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            The Vibe Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
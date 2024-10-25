'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Define types for style objects
type CSSProperties = React.CSSProperties
type BodyStyleKey = keyof BodyStyles
type BodyStyles = {
  overflow: string;
  height: string;
  width: string;
  position: string;
  top: string;
  left: string;
  paddingRight: string;
}

const styles = {
  noScroll: {
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: '0',
    left: '0'
  } as const
}

export default function GamerLoader() {
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    // Store original body styles with proper typing
    const originalStyles: BodyStyles = {
      overflow: document.body.style.overflow,
      height: document.body.style.height,
      width: document.body.style.width,
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      paddingRight: document.body.style.paddingRight
    }

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

    const handleLoad = () => {
      setIsVisible(false)
    }

    let slowConnectionTimer: NodeJS.Timeout

    const loadTimer = setTimeout(() => {
      if (document.readyState === 'complete') {
        setIsVisible(false)
      } else {
        slowConnectionTimer = setTimeout(() => {
          setIsVisible(document.readyState !== 'complete')
        }, 1000)
      }
    }, 4000)

    // Apply scroll prevention when loader is visible
    if (isVisible) {
      Object.keys(styles.noScroll).forEach((key) => {
        const styleKey = key as keyof typeof styles.noScroll;
        document.body.style[styleKey] = styles.noScroll[styleKey];
      });
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      // Restore original styles when loader is hidden
      Object.keys(originalStyles).forEach((key) => {
        const styleKey = key as BodyStyleKey;
        document.body.style[styleKey] = originalStyles[styleKey];
      });
    }

    window.addEventListener('load', handleLoad)

    // Cleanup function
    return () => {
      clearTimeout(loadTimer)
      if (slowConnectionTimer) {
        clearTimeout(slowConnectionTimer)
      }
      window.removeEventListener('load', handleLoad)
      // Restore original styles on unmount
      Object.keys(originalStyles).forEach((key) => {
        const styleKey = key as BodyStyleKey;
        document.body.style[styleKey] = originalStyles[styleKey];
      });
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
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/egaming', label: 'V-Gaming' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.15,
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    }),
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isMenuOpen 
          ? 'bg-black' 
          : isScrolled 
            ? 'bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg' 
            : 'bg-black'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              {imageError ? (
                <span className="text-white text-lg sm:text-xl font-bold">DCMH</span>
              ) : (
                <>
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src="/logo.jpeg"
                      alt="Dot Com Media House Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10 sm:h-14 sm:w-14 object-cover"
                      onError={() => setImageError(true)}
                    />
                  </div>
                  <span className="text-white text-lg sm:text-xl font-bold">DCMH</span>
                </>
              )}
            </motion.div>
          </Link>
          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-gray-300 transition-colors text-sm lg:text-base ${
                  pathname === item.href ? 'text-red-500 font-bold' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M3 6H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M3 12H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </motion.div>
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center justify-center min-h-screen py-20">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={menuItemVariants}
                  className="mb-6 sm:mb-8"
                >
                  <Link
                    href={item.href}
                    className={`hover:text-gray-300 transition-colors ${
                      pathname === item.href ? 'text-red-500 font-bold' : 'text-white'
                    } text-2xl sm:text-3xl md:text-4xl`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
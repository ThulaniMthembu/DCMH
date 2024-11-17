'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface Testimonial {
  id: number
  name: string
  company: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "A. Mothwa",
    company: "Happy Client",
    quote: "I am happy with The Vibe Gaming's service. I was hosting a birthday party for my son, the gaming booth was the highlight of the day"
  },
  {
    id: 2,
    name: "S. Williams",
    company: "Global Events Co.",
    quote: "The Dot Com Media House experience they created for our corporate event was a massive hit. It's rare to find a partner who understands both gaming and corporate needs so well."
  },
  {
    id: 3,
    name: "T. Zondi",
    company: "Tech Innovators Inc.",
    quote: "I am so addicted to the The Vibe Gaming shop base at Newtown, I'm a loyal customer and I'm always there almost everyday. The staff is friendly and the environment is just a vibe!"
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearTimeout(timer)
  }, [currentIndex])

  const navigate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === -1) {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      }
      return (prevIndex + 1) % testimonials.length
    })
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Card className="bg-gray-900/50 backdrop-blur border-gray-800">
        <div className="relative w-full px-4 py-12 sm:px-6 lg:px-8">
          {/* Large decorative quote mark */}
          <Quote className="absolute top-8 left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-500/20" aria-hidden="true" />
          
          <div className="relative h-[300px] sm:h-[250px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? 1000 : -1000,
                    opacity: 0
                  }),
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1
                  },
                  exit: (direction: number) => ({
                    zIndex: 0,
                    x: direction < 0 ? 1000 : -1000,
                    opacity: 0
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full px-4 sm:px-8"
              >
                <div className="text-start space-y-4">
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="pt-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate(-1)}
              className="bg-gray-900/50 border-gray-700 text-white hover:bg-gray-800 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate(1)}
              className="bg-gray-900/50 border-gray-700 text-white hover:bg-gray-800 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Pagination indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
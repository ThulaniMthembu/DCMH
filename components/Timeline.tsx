'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface TimelineEvent {
  year: number
  title: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 2021,
    title: "Dot Com Media House Founded",
    description: "Established with a vision to revolutionize digital marketing and brand activation."
  },
  {
    year: 2022,
    title: "Launch of V-Gaming Division",
    description: "Expanded into the e-gaming market with innovative event concepts."
  },
  {
    year: 2023,
    title: "100th Successful Campaign",
    description: "Reached a milestone of 100 successful marketing campaigns for diverse clients."
  },
  {
    year: 2024,
    title: "Expansion to New Office",
    description: "Moved to a larger office space to accommodate our growing team and client base."
  }
]

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  return (
    <div className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Journey</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500" />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'} items-center w-full`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{event.year}</h3>
                  <h4 className="text-lg font-semibold mb-2 text-white">{event.title}</h4>
                  <AnimatePresence>
                    {expandedEvent === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-300"
                      >
                        {event.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <button
                    onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                    className="mt-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center"
                  >
                    {expandedEvent === index ? (
                      <>
                        <span className="mr-1">Less</span>
                        <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        <span className="mr-1">More</span>
                        <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
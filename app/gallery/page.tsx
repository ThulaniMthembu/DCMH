'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Event Management", image: "/placeholder.svg", category: "Events" },
  { id: 2, title: "Brand Identity", image: "/placeholder.svg", category: "Branding" },
  { id: 3, title: "Digital Campaign", image: "/placeholder.svg", category: "Advertising" },
  { id: 4, title: "Product Launch", image: "/placeholder.svg", category: "Events" },
  { id: 5, title: "Social Media Strategy", image: "/placeholder.svg", category: "Advertising" },
  { id: 6, title: "Logo Design", image: "/placeholder.svg", category: "Branding" },
  { id: 7, title: "Corporate Event", image: "/placeholder.svg", category: "Events" },
  { id: 8, title: "Influencer Marketing", image: "/placeholder.svg", category: "Advertising" },
  { id: 9, title: "Packaging Design", image: "/placeholder.svg", category: "Branding" },
  { id: 10, title: "Trade Show Booth", image: "/placeholder.svg", category: "Events" },
  { id: 11, title: "Email Marketing", image: "/placeholder.svg", category: "Advertising" },
  { id: 12, title: "Brand Guidelines", image: "/placeholder.svg", category: "Branding" },
  { id: 13, title: "Virtual Conference", image: "/placeholder.svg", category: "Events" },
  { id: 14, title: "SEO Campaign", image: "/placeholder.svg", category: "Advertising" },
  { id: 15, title: "Brand Refresh", image: "/placeholder.svg", category: "Branding" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  const filteredItems = filter ? galleryItems.filter((item) => item.category === filter) : galleryItems

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <div className="relative min-h-screen">
      <Image
        src="/gallery-img.jpg"
        alt="Gallery background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 bg-black bg-opacity-70 text-white min-h-screen">
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Creative Portfolio
            </motion.h1>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <FilterButton filter={filter} setFilter={setFilter} category={null} label="All" />
              <FilterButton filter={filter} setFilter={setFilter} category="Events" label="Events" />
              <FilterButton filter={filter} setFilter={setFilter} category="Branding" label="Branding" />
              <FilterButton filter={filter} setFilter={setFilter} category="Advertising" label="Advertising" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {filteredItems.map((item, index) => (
                <GalleryItem key={item.id} item={item} index={index} setSelectedImage={setSelectedImage} />
              ))}
            </div>
          </div>
        </section>
        <AnimatePresence>
          {selectedImage && (
            <FullScreenImage
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              galleryItems={galleryItems}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

interface FilterButtonProps {
  filter: string | null;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  category: string | null;
  label: string;
}

function FilterButton({ filter, setFilter, category, label }: FilterButtonProps) {
  return (
    <Button
      variant={filter === category ? "default" : "outline"}
      onClick={() => setFilter(category)}
      className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base"
    >
      {label}
    </Button>
  )
}

interface GalleryItemProps {
  item: GalleryItem;
  index: number;
  setSelectedImage: React.Dispatch<React.SetStateAction<number | null>>;
}

function GalleryItem({ item, index, setSelectedImage }: GalleryItemProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setSelectedImage(item.id)}
    >
      <Image 
        src={item.image} 
        alt={item.title} 
        width={600} 
        height={400} 
        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center p-4">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
          <p className="text-gray-300 text-xs sm:text-sm">{item.category}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface FullScreenImageProps {
  selectedImage: number;
  setSelectedImage: React.Dispatch<React.SetStateAction<number | null>>;
  galleryItems: GalleryItem[];
}

function FullScreenImage({ selectedImage, setSelectedImage, galleryItems }: FullScreenImageProps) {
  const handleClose = useCallback(() => setSelectedImage(null), [setSelectedImage])

  const handlePrevious = useCallback(() => {
    setSelectedImage((prev) => (prev ? (prev > 1 ? prev - 1 : galleryItems.length) : null))
  }, [setSelectedImage, galleryItems.length])

  const handleNext = useCallback(() => {
    setSelectedImage((prev) => (prev ? (prev < galleryItems.length ? prev + 1 : 1) : null))
  }, [setSelectedImage, galleryItems.length])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') handleClose()
    if (event.key === 'ArrowLeft') handlePrevious()
    if (event.key === 'ArrowRight') handleNext()
  }, [handleClose, handlePrevious, handleNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const currentItem = galleryItems.find((item) => item.id === selectedImage)

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-16 right-4 text-white hover:bg-white/20 bg-black/50 rounded-full p-2 z-50"
          onClick={handleClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 bg-black/50 rounded-full p-2"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 bg-black/50 rounded-full p-2"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
        <div className="text-center px-4 max-w-full max-h-full">
          <div className="relative w-full h-[calc(100vh-200px)]">
            <Image
              src={currentItem?.image || ''}
              alt={currentItem?.title || ''}
              layout="fill"
              objectFit="contain"
              className="max-w-full max-h-full"
            />
          </div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold mt-4">
            {currentItem?.title}
          </h3>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            {currentItem?.category}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
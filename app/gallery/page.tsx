'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: number;
  image: string;
  orientation: 'landscape' | 'portrait';
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: "/gallery-images/gallery-image1.jpg", orientation: 'portrait' },
  { id: 2, image: "/gallery-images/gallery-image2.jpg", orientation: 'portrait' },
  { id: 3, image: "/gallery-images/gallery-image3.jpg", orientation: 'portrait' },
  { id: 4, image: "/gallery-images/gallery-image4.jpg", orientation: 'portrait' },
  { id: 5, image: "/gallery-images/gallery-image-landscape1.jpg", orientation: 'landscape' },
  { id: 6, image: "/gallery-images/gallery-image5.jpg", orientation: 'portrait' },
  { id: 7, image: "/gallery-images/gallery-image6.jpg", orientation: 'portrait' },
  { id: 8, image: "/gallery-images/gallery-image7.jpg", orientation: 'portrait' },
  { id: 9, image: "/gallery-images/gallery-image8.jpg", orientation: 'portrait' },
  { id: 10, image: "/gallery-images/gallery-image-landscape2.jpg", orientation: 'landscape' },
  { id: 11, image: "/gallery-images/gallery-image9.jpg", orientation: 'portrait' },
  { id: 12, image: "/gallery-images/gallery-image10.jpg", orientation: 'portrait' },
  { id: 13, image: "/gallery-images/gallery-image11.jpg", orientation: 'portrait' },
  { id: 14, image: "/gallery-images/gallery-image12.jpg", orientation: 'portrait' },
  { id: 15, image: "/gallery-images/gallery-image-landscape4.jpg", orientation: 'landscape' },
  { id: 16, image: "/gallery-images/gallery-image13.jpg", orientation: 'portrait' },
  { id: 17, image: "/gallery-images/gallery-image14.jpg", orientation: 'portrait' },
  { id: 18, image: "/gallery-images/gallery-image15.jpg", orientation: 'portrait' },
  { id: 19, image: "/gallery-images/gallery-image18.jpg", orientation: 'portrait' },
  { id: 20, image: "/gallery-images/gallery-image19.jpg", orientation: 'portrait' },
  { id: 21, image: "/gallery-images/gallery-image20.jpg", orientation: 'portrait' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
    <div className="relative min-h-screen bg-black text-white bg-[url('/gallery-image.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <section className="relative py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our Expertise
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We bring your vision to life through creative excellence and technical innovation. 
              Our team specializes in delivering compelling visual stories that capture attention 
              and drive engagement across all platforms.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <CategoryCard category="Events" image="/events.jpg" />
            <CategoryCard category="Branding" image="/branding.jpg" />
            <CategoryCard category="Advertising" image="/advertising.jpg" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Featured Work</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryItems.map((item, index) => (
              <GalleryItem 
                key={item.id} 
                item={item} 
                index={index} 
                setSelectedImage={setSelectedImage}
                className={
                  item.orientation === 'landscape' 
                    ? 'col-span-2' 
                    : ''
                }
              />
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {selectedImage !== null && (
          <FullScreenImage
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            galleryItems={galleryItems}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

interface CategoryCardProps {
  category: string;
  image: string;
}

function CategoryCard({ category, image }: CategoryCardProps) {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg h-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image 
        src={image} 
        alt={category} 
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{category}</h3>
      </div>
    </motion.div>
  )
}

interface GalleryItemProps {
  item: GalleryItem;
  index: number;
  setSelectedImage: React.Dispatch<React.SetStateAction<number | null>>;
  className?: string;
}

function GalleryItem({ item, index, setSelectedImage, className }: GalleryItemProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => setSelectedImage(item.id)}
    >
      <div className={`relative ${item.orientation === 'landscape' ? 'aspect-[16/9]' : 'aspect-[3/4]'}`}>
        <Image 
          src={item.image} 
          alt={`Gallery image ${item.id}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
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

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') handleClose()
  }, [handleClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const currentItem = galleryItems.find((item) => item.id === selectedImage)

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center" 
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-white hover:bg-white/20 bg-black/50 rounded-full p-2 z-50"
          onClick={handleClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
        <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center">
          <Image
            src={currentItem?.image || ''}
            alt={`Full screen gallery image ${selectedImage}`}
            layout="fill"
            objectFit="contain"
            className="select-none"
          />
        </div>
      </div>
    </motion.div>
  )
}
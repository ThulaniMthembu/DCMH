'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const postsCollection = collection(db, 'posts')
      const postsQuery = query(postsCollection, orderBy('date', 'desc'))
      const querySnapshot = await getDocs(postsQuery)
      const posts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as BlogPost))
      setBlogPosts(posts)
    }

    fetchBlogPosts()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Image
        src="/blog-background.jpg"
        alt="Blog background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
      <section className="relative z-20 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dot Com Media House Blog
          </motion.h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
                    <Button asChild variant="link" className="text-blue-400 hover:text-blue-300">
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
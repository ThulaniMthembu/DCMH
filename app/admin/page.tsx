'use client'

import { useState, useEffect } from 'react'
import { User } from 'firebase/auth'
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, orderBy, query } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'
import AdminSignIn from '@/components/AdminSignIn'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'react-hot-toast'

const ADMIN_EMAILS = ['thulanim457@gmail.com', 'hawulethu@gmail.com']

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
}

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && ADMIN_EMAILS.includes(user.email || '')) {
        setUser(user)
        fetchBlogPosts()
      } else {
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [])

  const fetchBlogPosts = async () => {
    try {
      const postsCollection = collection(db, 'posts')
      const postsQuery = query(postsCollection, orderBy('date', 'desc'))
      const querySnapshot = await getDocs(postsQuery)
      const posts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as BlogPost))
      setBlogPosts(posts)
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      toast.error('Error fetching blog posts. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setIsSubmitting(true)
    try {
      if (editingPost) {
        await updateDoc(doc(db, 'posts', editingPost.id), {
          title,
          content,
          date: new Date().toISOString(),
        })
        toast.success('Blog post updated successfully')
      } else {
        await addDoc(collection(db, 'posts'), {
          title,
          content,
          date: new Date().toISOString(),
          authorId: user.uid,
          authorName: user.displayName,
        })
        toast.success('Blog post created successfully')
      }
      setTitle('')
      setContent('')
      setEditingPost(null)
      fetchBlogPosts()
    } catch (error) {
      console.error('Error saving blog post:', error)
      toast.error('Error saving blog post. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setTitle(post.title)
    setContent(post.content)
  }

  const handleDelete = async (postId: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteDoc(doc(db, 'posts', postId))
        toast.success('Blog post deleted successfully')
        fetchBlogPosts()
      } catch (error) {
        console.error('Error deleting blog post:', error)
        toast.error('Error deleting blog post. Please try again.')
      }
    }
  }

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      setUser(null)
      toast.success('Signed out successfully')
    } catch (error) {
      console.error('Error signing out', error)
      toast.error('Error signing out. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          Admin Dashboard
        </h1>

        <div className="max-w-4xl mx-auto">
          {!user ? (
            <AdminSignIn />
          ) : (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">
                  {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h2>
                <Button 
                  onClick={handleSignOut} 
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Sign Out
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mb-12">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2">
                    Title
                  </label>
                  <Input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full bg-[#1e2530] text-white border-0"
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium mb-2">
                    Content
                  </label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="w-full bg-[#1e2530] text-white border-0"
                    rows={10}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-gray-200" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : (editingPost ? 'Update Blog Post' : 'Create Blog Post')}
                </Button>
              </form>

              <h2 className="text-2xl font-bold mb-4">Existing Blog Posts</h2>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-[#1e2530] p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 whitespace-pre-wrap">{post.content}</p>
                    <div className="flex justify-end space-x-2">
                      <Button 
                        onClick={() => handleEdit(post)} 
                        variant="outline"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Edit
                      </Button>
                      <Button 
                        onClick={() => handleDelete(post.id)} 
                        variant="outline"
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
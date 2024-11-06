import { notFound } from 'next/navigation'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const docRef = doc(db, 'posts', params.id)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    notFound()
  }

  const post = docSnap.data() as BlogPost

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const renderContent = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return content.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            {part}
          </a>
        )
      }
      return part
    })
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" passHref>
            <Button variant="outline" className="mb-6">
              Back to Blog
            </Button>
          </Link>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-400 mb-6">Published on {formatDate(post.date)}</p>
            <div className="whitespace-pre-wrap">{renderContent(post.content)}</div>
          </article>
        </div>
      </div>
    </div>
  )
}
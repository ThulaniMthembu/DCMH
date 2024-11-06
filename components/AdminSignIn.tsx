'use client'

import { useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { Button } from "@/components/ui/button"
import { toast } from 'react-hot-toast'
import { AlertTriangle } from 'lucide-react'

const ADMIN_EMAILS = ['thulanim457@gmail.com', 'hawulethu@gmail.com']

export default function AdminSignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      if (user && ADMIN_EMAILS.includes(user.email || '')) {
        toast.success('Signed in successfully')
      } else {
        // Sign out the user if they're not an admin
        await auth.signOut()
        toast.error('Access denied. You do not have administrator privileges.')
      }
    } catch (error) {
      console.error('Error signing in with Google', error)
      toast.error('Failed to sign in. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
      <h2 className="text-3xl font-bold text-white">Admin Sign In</h2>

      <Button
        onClick={handleSignIn}
        disabled={isLoading}
        className="flex items-center justify-center w-64 h-12 px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isLoading ? (
          <span className="mr-2 animate-spin">&#9696;</span>
        ) : (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
            <path fill="none" d="M1 1h22v22H1z" />
          </svg>
        )}
        {isLoading ? 'Signing in...' : 'Sign in with Google'}
      </Button>
      
      <div className="bg-red-600 text-white p-4 rounded-lg shadow-lg max-w-md w-full text-center">
        <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
        <p className="text-lg font-semibold">
          WARNING: Restricted Access
        </p>
        <p className="mt-2">
          Only authorized administrators can access this area.
        </p>
      </div>
    </div>
  )
}
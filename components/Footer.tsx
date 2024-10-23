import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Megaphone, Gamepad, Camera } from 'lucide-react'

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12">
      <div className="border-t border-gray-800 w-full mb-12"></div>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-4">
          <div className="md:w-1/3 max-w-xs">
            <Image
              src="/DCMH.jpeg"
              alt="Dot Com Media House"
              width={200}
              height={200}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">Dot Com Media House</h3>
            <p className="text-gray-400">
              Innovating the future of media since 2021. Specializing in Advertising, Event Management, and Branding.
            </p>
          </div>
          <div className="md:w-1/3 max-w-xs">
            <h3 className="text-xl font-bold mb-4">Services Highlight</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Megaphone className="w-5 h-5 mr-2" />
                <span>Brand Activation</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Gamepad className="w-5 h-5 mr-2" />
                <span>E-Gaming Events</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Camera className="w-5 h-5 mr-2" />
                <span>Content Creation</span>
              </li>
            </ul>
            <Link href="/services" className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors">
              View All Services
            </Link>
          </div>
          <div className="md:w-1/3 max-w-xs">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/dot-com-media-house-088465213/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/evibeg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/thevibegaming" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@the_vibegaming?_t=8qk4QXuzdED&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Dot Com Media House. All rights reserved.</p>
        </div>
        <div className="mt-4 text-center text-gray-500 text-xs">
          <a href="https://devmajxr.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            Website by Dev-Majxr
          </a>
        </div>
      </div>
    </footer>
  )
}
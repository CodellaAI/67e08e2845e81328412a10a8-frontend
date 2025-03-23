
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Heart } from 'lucide-react'

export default function RetroFooter() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black border-t-4 border-retro-purple">
      <div className="h-2 bg-gradient-to-r from-retro-teal via-retro-pink to-retro-blue"></div>
      
      <div className="retro-container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-pixel text-xl text-retro-green mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="retro-link">Home</Link></li>
              <li><Link href="/about" className="retro-link">About</Link></li>
              <li><Link href="/games" className="retro-link">Games</Link></li>
              <li><Link href="/links" className="retro-link">Links</Link></li>
              <li><Link href="/guestbook" className="retro-link">Guestbook</Link></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="font-pixel text-xl text-retro-green mb-4">Contact</h3>
            <div className="flex justify-center items-center space-x-2 mb-2">
              <Mail className="text-retro-teal" size={18} />
              <span className="font-courier text-retro-pink">webmaster@geocities.com</span>
            </div>
            <p className="font-courier text-gray-400 text-sm">
              Please allow 2-3 days for a response
            </p>
            <div className="mt-4">
              <Image 
                src="/images/email.gif" 
                alt="Email Me" 
                width={88} 
                height={31}
                className="mx-auto"
              />
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="font-pixel text-xl text-retro-green mb-4">Site Info</h3>
            <p className="font-courier text-gray-400 text-sm mb-2">
              Last updated: December 15, 2023
            </p>
            <p className="font-courier text-gray-400 text-sm mb-2">
              Best viewed at 800x600 resolution
            </p>
            <div className="flex justify-center md:justify-end space-x-2 mt-4">
              <Image 
                src="/images/html.gif" 
                alt="HTML 3.2" 
                width={88} 
                height={31}
              />
              <Image 
                src="/images/netscape.gif" 
                alt="Netscape Now!" 
                width={88} 
                height={31}
              />
            </div>
          </div>
        </div>
        
        <div className="retro-divider my-6"></div>
        
        <div className="text-center bg-retro-darkgray p-4 border-2 border-retro-purple">
          <p className="font-pixel text-retro-pink text-sm">
            <span className="flex items-center justify-center">
              Made with <Heart className="text-retro-red mx-1" size={16} /> in {currentYear}
            </span>
          </p>
          <p className="font-courier text-retro-teal text-xs mt-2">
            This site is a nostalgic tribute to 90s web design
          </p>
          <div className="mt-4 inline-block bg-black px-4 py-2 border retro-bevel">
            <p className="font-courier text-retro-yellow text-xs blink">
              Visitor Count: 1,337
            </p>
          </div>
          <div className="mt-4 flex justify-center space-x-3">
            <Image 
              src="/images/ie_animated.gif" 
              alt="Internet Explorer" 
              width={88} 
              height={31}
            />
            <Image 
              src="/images/notepad.gif" 
              alt="Made with Notepad" 
              width={88} 
              height={31}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

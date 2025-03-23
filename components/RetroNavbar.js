
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, User, Link2, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function RetroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Links', path: '/links', icon: <Link2 size={18} /> },
    { name: 'Guestbook', path: '/guestbook', icon: <BookOpen size={18} /> },
  ]
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <header className="bg-retro-black border-b-4 border-retro-purple">
      <div className="retro-container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/images/logo.gif" 
              alt="Retro Time Machine" 
              width={60} 
              height={60}
              className="mr-4"
            />
            <div>
              <h1 className="font-pixel text-2xl md:text-3xl text-retro-teal">
                Retro Time Machine
              </h1>
              <p className="font-comic text-sm text-retro-pink">
                A journey back to the 90s web
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={pathname === item.path ? "retro-nav-item-active" : "retro-nav-item"}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-1">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
          
          <button 
            className="md:hidden text-retro-teal hover:text-retro-pink"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-retro-darkgray border-2 border-retro-purple p-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`block py-2 px-4 ${pathname === item.path ? "text-retro-orange" : "text-retro-yellow hover:text-retro-orange"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2 font-pixel">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <div className="h-1 bg-gradient-to-r from-retro-blue via-retro-pink to-retro-teal"></div>
    </header>
  )
}

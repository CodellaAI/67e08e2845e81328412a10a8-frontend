
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Terminal, User, Link2, Database, Gamepad2, Server, Shield, Key } from 'lucide-react'
import Image from 'next/image'

export default function RetroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Terminal', path: '/', icon: <Terminal size={18} /> },
    { name: 'Identity', path: '/about', icon: <User size={18} /> },
    { name: 'Network', path: '/links', icon: <Link2 size={18} /> },
    { name: 'Logs', path: '/guestbook', icon: <Database size={18} /> },
    { name: 'Exploits', path: '/games', icon: <Gamepad2 size={18} /> },
  ]
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <header className="bg-hacker-black border-b-2 border-matrix-green">
      <div className="retro-container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-4 bg-hacker-terminal p-2 border border-matrix-green">
              <Shield className="text-matrix-green" size={32} />
            </div>
            <div>
              <h1 className="font-pixel text-2xl md:text-3xl text-matrix-green">
                HACKER_TERMINAL
              </h1>
              <p className="font-terminal text-sm text-matrix-dim">
                v1.3.3.7_secure_shell
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
            <Link 
              href="/secret"
              className="secret-button ml-4 opacity-30 hover:opacity-100 transition-opacity duration-300"
              title="Secret Access"
            >
              <Key size={18} className="text-matrix-green" />
            </Link>
          </div>
          
          <button 
            className="md:hidden text-matrix-green hover:text-matrix-cyan"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-hacker-terminal border-2 border-matrix-green p-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`block py-2 px-4 ${pathname === item.path ? "text-matrix-green" : "text-matrix-dim hover:text-matrix-green"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2 font-pixel">{item.name}</span>
                </div>
              </Link>
            ))}
            <Link 
              href="/secret"
              className="block py-2 px-4 text-matrix-dim hover:text-matrix-green opacity-30 hover:opacity-100 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Key size={18} />
                <span className="ml-2 font-pixel">Secret Access</span>
              </div>
            </Link>
          </div>
        )}
      </div>
      
      <div className="h-1 bg-matrix-green"></div>
    </header>
  )
}

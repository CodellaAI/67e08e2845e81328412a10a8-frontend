
"use client"

import Link from 'next/link'
import { Mail, Shield, Terminal, Server, Database, Key } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function RetroFooter() {
  const currentYear = new Date().getFullYear()
  const [isShaking, setIsShaking] = useState(false)
  const [secretVisible, setSecretVisible] = useState(false)
  
  useEffect(() => {
    if (isShaking) {
      // Reset the shaking after 2 seconds
      const timer = setTimeout(() => {
        setIsShaking(false)
        setSecretVisible(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [isShaking])
  
  const triggerShake = () => {
    setIsShaking(true)
  }
  
  return (
    <footer className={`bg-hacker-black border-t-2 border-matrix-green ${isShaking ? 'shake-effect' : ''}`}>
      <div className="h-1 bg-matrix-green"></div>
      
      <div className="retro-container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-pixel text-xl text-matrix-green mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="retro-link">Terminal</Link></li>
              <li><Link href="/about" className="retro-link">Identity</Link></li>
              <li><Link href="/games" className="retro-link">Exploits</Link></li>
              <li><Link href="/links" className="retro-link">Network</Link></li>
              <li><Link href="/guestbook" className="retro-link">Logs</Link></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="font-pixel text-xl text-matrix-green mb-4">Contact</h3>
            <div className="flex justify-center items-center space-x-2 mb-2">
              <Mail className="text-matrix-green" size={18} />
              <span className="font-terminal text-matrix-cyan">admin@secure-server.net</span>
            </div>
            <p className="font-terminal text-matrix-dim text-sm">
              Encrypted channels only
            </p>
            <div className="mt-4 bg-hacker-terminal p-2 border border-matrix-green inline-block">
              <Terminal className="text-matrix-green mx-auto" size={24} />
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="font-pixel text-xl text-matrix-green mb-4">System Info</h3>
            <p className="font-terminal text-matrix-dim text-sm mb-2">
              Last security scan: 12/15/2023
            </p>
            <p className="font-terminal text-matrix-dim text-sm mb-2">
              Connection: Encrypted
            </p>
            <div className="flex justify-center md:justify-end space-x-2 mt-4">
              <div className="bg-hacker-terminal p-2 border border-matrix-green">
                <Shield className="text-matrix-green" size={20} />
              </div>
              <div className="bg-hacker-terminal p-2 border border-matrix-green">
                <Server className="text-matrix-green" size={20} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="retro-divider my-6"></div>
        
        <div className="text-center bg-hacker-terminal p-4 border-2 border-matrix-green">
          <p className="font-pixel text-matrix-cyan text-sm">
            <span className="flex items-center justify-center">
              $ secure_shell_v1.3.3.7 {currentYear}
            </span>
          </p>
          <p className="font-terminal text-matrix-dim text-xs mt-2">
            All connections are monitored and recorded
          </p>
          <div className="mt-4 inline-block bg-hacker-black px-4 py-2 border retro-bevel">
            <p className="font-terminal text-matrix-green text-xs animate-blink">
              Access Count: 1,337
            </p>
          </div>
          <div className="mt-4 flex justify-center space-x-3">
            <div className="bg-hacker-terminal p-2 border border-matrix-green">
              <Database className="text-matrix-green" size={20} />
            </div>
            <div 
              className="bg-hacker-terminal p-2 border border-matrix-green cursor-pointer secret-button" 
              onClick={triggerShake}
              title="Secret terminal command"
            >
              <Terminal className="text-matrix-green" size={20} />
            </div>
          </div>
          
          {secretVisible && (
            <div className="mt-4 p-3 border-2 border-matrix-cyan bg-hacker-black animate-pulse">
              <h4 className="font-pixel text-matrix-cyan mb-2 glitch-effect" data-text="SECRET ACCESS GRANTED">SECRET ACCESS GRANTED</h4>
              <div className="flex items-center justify-center">
                <Key className="text-matrix-cyan mr-2" size={18} />
                <Link href="/secret" className="font-terminal text-matrix-green hover:text-matrix-cyan">
                  $ access_hidden_terminal
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

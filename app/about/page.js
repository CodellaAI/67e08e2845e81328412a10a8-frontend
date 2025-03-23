
import { Bomb, Star, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <main className="retro-container py-8">
      <h1 className="retro-title">ABOUT ME</h1>
      
      <div className="marquee-container my-6">
        <div className="marquee-text">
          Learn all about the webmaster of this totally radical site! I know HTML and even some JavaScript!
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="retro-card">
          <div className="flex justify-center mb-6">
            <div className="border-8 border-retro-purple p-1 bg-black">
              <Image 
                src="/images/webmaster.gif" 
                alt="Webmaster" 
                width={200} 
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
          <h2 className="retro-subtitle text-center">The Webmaster</h2>
          <p className="retro-text mb-4">
            Hello internet surfer! I'm the creator of this radical website. I've been making web pages since 1996 
            and I know all about HTML tables and frames!
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <div className="text-center">
              <Image 
                src="/images/netscape.gif" 
                alt="Netscape Now!" 
                width={88} 
                height={31}
                className="mx-auto"
              />
              <p className="font-pixel text-xs text-retro-teal mt-2">Netscape Now!</p>
            </div>
            <div className="text-center">
              <Image 
                src="/images/ie.gif" 
                alt="Internet Explorer" 
                width={88} 
                height={31}
                className="mx-auto"
              />
              <p className="font-pixel text-xs text-retro-teal mt-2">IE Compatible</p>
            </div>
          </div>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">My Skills</h2>
          <ul className="space-y-4 text-white font-courier">
            <li className="flex items-start">
              <Star className="text-retro-yellow mr-2 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold">HTML</p>
                <div className="w-full bg-black h-4 mt-1">
                  <div className="bg-retro-green h-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <Star className="text-retro-yellow mr-2 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold">GIF Animation</p>
                <div className="w-full bg-black h-4 mt-1">
                  <div className="bg-retro-teal h-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <Star className="text-retro-yellow mr-2 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold">JavaScript</p>
                <div className="w-full bg-black h-4 mt-1">
                  <div className="bg-retro-pink h-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <Star className="text-retro-yellow mr-2 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold">Frames</p>
                <div className="w-full bg-black h-4 mt-1">
                  <div className="bg-retro-yellow h-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </li>
          </ul>
          
          <h2 className="retro-subtitle mt-8">My Hobbies</h2>
          <ul className="space-y-2 text-white font-courier">
            <li className="flex items-center">
              <Bomb className="text-retro-red mr-2" size={20} />
              <span>Collecting GIFs</span>
            </li>
            <li className="flex items-center">
              <Bomb className="text-retro-red mr-2" size={20} />
              <span>Making Web Pages</span>
            </li>
            <li className="flex items-center">
              <Bomb className="text-retro-red mr-2" size={20} />
              <span>Playing DOOM</span>
            </li>
            <li className="flex items-center">
              <Bomb className="text-retro-red mr-2" size={20} />
              <span>Browsing Web Rings</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="retro-divider"></div>
      
      <div className="retro-card mb-12">
        <h2 className="retro-subtitle">My Awesome Computer Setup</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="retro-text mb-4">
              Check out my radical computer specs:
            </p>
            <ul className="space-y-2 text-white font-courier">
              <li>• Pentium II 233MHz</li>
              <li>• 64MB RAM</li>
              <li>• 4GB Hard Drive</li>
              <li>• 56K Modem</li>
              <li>• SoundBlaster 16 Audio Card</li>
              <li>• 15" CRT Monitor (800x600 resolution)</li>
              <li>• Windows 95 Operating System</li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="border-8 border-retro-teal p-1 bg-black">
              <Image 
                src="/images/computer.gif" 
                alt="My Computer" 
                width={240} 
                height={180}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-retro-darkgray p-6 border-4 border-dashed border-retro-yellow">
        <h2 className="retro-subtitle text-center">Contact Me</h2>
        <div className="text-center font-courier text-white space-y-2">
          <p>Email: webmaster@geocities.com</p>
          <p>ICQ: 12345678</p>
          <p>AIM: RetroWebMaster90</p>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <Image 
            src="/images/email.gif" 
            alt="Email Me" 
            width={88} 
            height={31}
            className="mx-auto"
          />
          <Image 
            src="/images/icq.gif" 
            alt="ICQ" 
            width={88} 
            height={31}
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  )
}

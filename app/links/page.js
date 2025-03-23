
import { Link, ExternalLink, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Links() {
  return (
    <main className="retro-container py-8">
      <h1 className="retro-title">COOL LINKS</h1>
      
      <div className="marquee-container my-6">
        <div className="marquee-text">
          Check out these totally rad links to other awesome websites on the Information Superhighway!
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="retro-card">
          <h2 className="retro-subtitle">Web Rings</h2>
          <p className="retro-text mb-4">
            Join these awesome web rings to discover more sites like mine!
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
              <Image 
                src="/images/webring1.gif" 
                alt="90s Web Ring" 
                width={88} 
                height={31}
                className="mx-auto"
              />
              <p className="font-pixel text-xs text-retro-teal mt-2">90s Web Ring</p>
            </div>
            <div className="text-center">
              <Image 
                src="/images/webring2.gif" 
                alt="Retro Sites" 
                width={88} 
                height={31}
                className="mx-auto"
              />
              <p className="font-pixel text-xs text-retro-teal mt-2">Retro Sites</p>
            </div>
            <div className="text-center">
              <Image 
                src="/images/webring3.gif" 
                alt="GIF Collectors" 
                width={88} 
                height={31}
                className="mx-auto"
              />
              <p className="font-pixel text-xs text-retro-teal mt-2">GIF Collectors</p>
            </div>
            <div className="text-center">
              <Image 
                src="/images/webring4.gif" 
                alt="GeoCities" 
                width={88} 
                height={31}
                className="mx-auto"
              />
              <p className="font-pixel text-xs text-retro-teal mt-2">GeoCities</p>
            </div>
          </div>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">My Web Buddies</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <ExternalLink className="text-retro-yellow mr-2" size={20} />
              <a href="#" className="retro-link">CoolDude2000's Homepage</a>
            </li>
            <li className="flex items-center">
              <ExternalLink className="text-retro-yellow mr-2" size={20} />
              <a href="#" className="retro-link">Sarah's Cat Collection</a>
            </li>
            <li className="flex items-center">
              <ExternalLink className="text-retro-yellow mr-2" size={20} />
              <a href="#" className="retro-link">Mike's Gaming Corner</a>
            </li>
            <li className="flex items-center">
              <ExternalLink className="text-retro-yellow mr-2" size={20} />
              <a href="#" className="retro-link">The X-Files Fan Page</a>
            </li>
            <li className="flex items-center">
              <ExternalLink className="text-retro-yellow mr-2" size={20} />
              <a href="#" className="retro-link">90s Music Lyrics Archive</a>
            </li>
          </ul>
          <div className="mt-6 p-2 bg-retro-black border-2 border-retro-pink flex justify-center">
            <div className="animate-pulse">
              <Image 
                src="/images/friends.gif" 
                alt="Friends" 
                width={120} 
                height={40}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="retro-divider"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="retro-card">
          <h2 className="retro-subtitle">Cool Sites</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Globe className="text-retro-teal mr-2" size={20} />
              <a href="#" className="retro-link">Yahoo!</a>
            </li>
            <li className="flex items-center">
              <Globe className="text-retro-teal mr-2" size={20} />
              <a href="#" className="retro-link">AltaVista</a>
            </li>
            <li className="flex items-center">
              <Globe className="text-retro-teal mr-2" size={20} />
              <a href="#" className="retro-link">GeoCities</a>
            </li>
            <li className="flex items-center">
              <Globe className="text-retro-teal mr-2" size={20} />
              <a href="#" className="retro-link">Angelfire</a>
            </li>
          </ul>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">Free Stuff</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Link className="text-retro-green mr-2" size={20} />
              <a href="#" className="retro-link">Free GIFs</a>
            </li>
            <li className="flex items-center">
              <Link className="text-retro-green mr-2" size={20} />
              <a href="#" className="retro-link">Free Backgrounds</a>
            </li>
            <li className="flex items-center">
              <Link className="text-retro-green mr-2" size={20} />
              <a href="#" className="retro-link">Free Counters</a>
            </li>
            <li className="flex items-center">
              <Link className="text-retro-green mr-2" size={20} />
              <a href="#" className="retro-link">Free Guestbooks</a>
            </li>
          </ul>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">HTML Help</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Link className="text-retro-pink mr-2" size={20} />
              <a href="#" className="retro-link">HTML 3.2 Reference</a>
            </li>
            <li className="flex items-center">
              <Link className="text-retro-pink mr-2" size={20} />
              <a href="#" className="retro-link">Table Tutorial</a>
            </li>
            <li className="flex items-center">
              <Link className="text-retro-pink mr-2" size={20} />
              <a href="#" className="retro-link">Frames Guide</a>
            </li>
            <li className="flex items-center">
              <Link className="text-retro-pink mr-2" size={20} />
              <a href="#" className="retro-link">JavaScript Snippets</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-retro-darkgray p-6 border-4 border-dashed border-retro-green mb-12">
        <h2 className="retro-subtitle text-center">Add My Site To Your Links!</h2>
        <div className="font-courier text-white mb-4">
          <p className="text-center">Copy this HTML code to add my button to your site:</p>
        </div>
        <div className="bg-black p-4 font-courier text-retro-green text-sm overflow-x-auto">
          &lt;a href="http://www.mysite.com"&gt;&lt;img src="http://www.mysite.com/button.gif" width="88" height="31" alt="My Awesome Site" border="0"&gt;&lt;/a&gt;
        </div>
        <div className="flex justify-center mt-6">
          <Image 
            src="/images/mybutton.gif" 
            alt="My Button" 
            width={88} 
            height={31}
            className="mx-auto"
          />
        </div>
      </div>
      
      <div className="text-center font-pixel text-retro-orange text-sm">
        <p>These links open in a new window. I am not responsible for the content of external sites.</p>
        <p className="mt-2">Last updated: December 15, 2023</p>
      </div>
    </main>
  )
}

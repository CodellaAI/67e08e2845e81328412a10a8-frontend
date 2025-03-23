
import Image from 'next/image'
import Link from 'next/link'
import { Construction, Bomb, Star, Sparkles, Zap, Gamepad2 } from 'lucide-react'
import RetroCounter from '../components/RetroCounter'

export default function Home() {
  // Sample games data for the homepage
  const featuredGames = [
    {
      id: 1,
      title: "Doom (1993)",
      image: "/images/games/doom.jpg",
      company: "id Software"
    },
    {
      id: 2,
      title: "Super Mario 64 (1996)",
      image: "/images/games/mario64.jpg",
      company: "Nintendo"
    },
    {
      id: 3,
      title: "Final Fantasy VII (1997)",
      image: "/images/games/ff7.jpg",
      company: "Square"
    },
    {
      id: 4,
      title: "The Legend of Zelda: Ocarina of Time (1998)",
      image: "/images/games/zelda.jpg",
      company: "Nintendo"
    }
  ];

  return (
    <main className="retro-container py-8">
      <div className="text-center mb-12">
        <h1 className="retro-title">WELCOME TO THE 90s</h1>
        <div className="marquee-container my-6">
          <div className="marquee-text">
            Welcome to my awesome retro website! This site looks best in Netscape Navigator at 800x600 resolution!
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="retro-card">
          <h2 className="retro-subtitle">Radical Features</h2>
          <ul className="space-y-3 text-white font-courier">
            <li className="flex items-start">
              <Zap className="text-retro-yellow mr-2 flex-shrink-0" size={20} />
              <span>Blazing fast GIFs</span>
            </li>
            <li className="flex items-start">
              <Star className="text-retro-yellow mr-2 flex-shrink-0" size={20} />
              <span>Authentic 90s design</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="text-retro-yellow mr-2 flex-shrink-0" size={20} />
              <span>Nostalgic vibes</span>
            </li>
          </ul>
          <button className="retro-button mt-4 w-full">
            Click Me!
          </button>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">What's New?</h2>
          <div className="space-y-3 text-white font-courier">
            <p>12/15/2023: Added new GIFs!</p>
            <p>12/10/2023: Fixed broken links</p>
            <p>12/01/2023: Website launched!</p>
          </div>
          <div className="mt-4 p-2 bg-retro-black border-2 border-retro-teal flex justify-center">
            <div className="animate-pulse">
              <Image 
                src="/images/new.gif" 
                alt="New!" 
                width={80} 
                height={30}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">Cool Links</h2>
          <ul className="space-y-3">
            <li><a href="#" className="retro-link">My GeoCities Page</a></li>
            <li><a href="#" className="retro-link">Awesome GIF Collection</a></li>
            <li><a href="#" className="retro-link">90s Music Fan Club</a></li>
            <li><a href="#" className="retro-link">Web Rings Directory</a></li>
          </ul>
          <div className="mt-4 flex justify-center">
            <Image 
              src="/images/webring.gif" 
              alt="Web Ring" 
              width={88} 
              height={31}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      
      <div className="retro-divider"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="retro-card">
          <h2 className="retro-subtitle">About This Site</h2>
          <p className="retro-text mb-4">
            This radical website was created to bring back the nostalgic feeling of surfing the web in the 1990s. 
            Remember when the internet was a wild and uncharted territory? Those were the days!
          </p>
          <p className="retro-text">
            Built with the latest in web technology while maintaining that authentic 90s look and feel.
          </p>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">Visitor Counter</h2>
          <div className="flex justify-center my-4">
            <RetroCounter count={1337} />
          </div>
          <p className="retro-text text-center">
            You are visitor number 1,337 to this awesome page!
          </p>
          <div className="mt-4 flex justify-center">
            <Image 
              src="/images/counter.gif" 
              alt="Counter" 
              width={88} 
              height={31}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      
      <div className="under-construction mb-12">
        <Construction className="text-black" size={24} />
        <span>UNDER CONSTRUCTION - MORE CONTENT COMING SOON!</span>
        <Construction className="text-black" size={24} />
      </div>
      
      <div className="bg-retro-darkgray p-6 border-4 border-dashed border-retro-red mb-12">
        <h2 className="retro-subtitle text-center">Sign My Guestbook!</h2>
        <form className="space-y-4 max-w-md mx-auto">
          <div>
            <label className="block font-courier text-white mb-2">Name:</label>
            <input 
              type="text" 
              className="w-full bg-black text-retro-green border-2 border-retro-green p-2 font-courier focus:outline-none focus:ring-2 focus:ring-retro-teal"
            />
          </div>
          <div>
            <label className="block font-courier text-white mb-2">Email:</label>
            <input 
              type="email" 
              className="w-full bg-black text-retro-green border-2 border-retro-green p-2 font-courier focus:outline-none focus:ring-2 focus:ring-retro-teal"
            />
          </div>
          <div>
            <label className="block font-courier text-white mb-2">Message:</label>
            <textarea 
              rows="4" 
              className="w-full bg-black text-retro-green border-2 border-retro-green p-2 font-courier focus:outline-none focus:ring-2 focus:ring-retro-teal"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="retro-button">
              Submit
            </button>
          </div>
        </form>
      </div>
      
      {/* Games Section Added */}
      <div className="mb-12">
        <div className="text-center mb-6">
          <h2 className="retro-subtitle flex items-center justify-center">
            <Gamepad2 className="text-retro-yellow mr-2" size={24} />
            Totally Rad 90s Games
            <Gamepad2 className="text-retro-yellow ml-2" size={24} />
          </h2>
          <p className="font-courier text-retro-green mb-4">Check out these classic games that defined the 90s era!</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredGames.map((game) => (
            <Link href={`/games/${game.id}`} key={game.id}>
              <div className="bg-retro-darkgray border-2 border-retro-teal hover:border-retro-pink p-3 cursor-pointer transition-colors">
                <div className="bg-retro-black border border-retro-purple h-32 flex items-center justify-center mb-2">
                  <p className="text-retro-orange font-pixel text-center text-sm">
                    [IMAGE LOADING...]
                  </p>
                </div>
                <h3 className="font-pixel text-retro-yellow text-center truncate">{game.title}</h3>
                <p className="text-retro-teal font-courier text-xs text-center">{game.company}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Link href="/games" className="retro-button inline-flex items-center">
            <span>View All Games</span>
            <Gamepad2 className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </main>
  )
}

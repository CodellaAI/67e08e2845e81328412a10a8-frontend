
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Download, Star, Info } from 'lucide-react'

export default function GamePage({ params }) {
  const { id } = params
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const games = [
      {
        id: 1,
        title: "Doom (1993)",
        description: "First-person shooter that defined a genre and pushed PC gaming to new heights.",
        longDescription: "DOOM is considered one of the pioneering first-person shooter games, establishing a foundation for the genre and influencing countless titles that followed. Players navigate maze-like levels, battling demons from hell with an array of weapons while collecting keycards to progress further into military bases on Mars' moons.",
        image: "/images/games/doom.jpg",
        company: "id Software",
        releaseDate: "December 10, 1993",
        platform: "MS-DOS",
        genre: "First-person shooter",
        rating: 4.9,
        requirements: "386 processor, 4MB RAM, VGA graphics"
      },
      {
        id: 2,
        title: "Super Mario 64 (1996)",
        description: "Groundbreaking 3D platformer that revolutionized game design.",
        longDescription: "Super Mario 64 was a landmark title that successfully translated the Mario franchise into three dimensions. The game features non-linear gameplay where players collect Power Stars by completing various missions across different worlds accessed through paintings in Princess Peach's castle.",
        image: "/images/games/mario64.jpg",
        company: "Nintendo",
        releaseDate: "June 23, 1996",
        platform: "Nintendo 64",
        genre: "3D Platformer",
        rating: 4.8,
        requirements: "Nintendo 64 console, Controller"
      },
      {
        id: 3,
        title: "Final Fantasy VII (1997)",
        description: "Epic RPG that brought the genre to mainstream popularity.",
        longDescription: "Final Fantasy VII follows Cloud Strife, a mercenary who joins an eco-terrorist organization to stop a world-controlling megacorporation from using the planet's life essence as an energy source. Events send Cloud and his allies in pursuit of Sephiroth, a superhuman intent on destroying the planet.",
        image: "/images/games/ff7.jpg",
        company: "Square",
        releaseDate: "January 31, 1997",
        platform: "PlayStation",
        genre: "Japanese Role-Playing Game",
        rating: 4.9,
        requirements: "PlayStation console, Memory Card (15 blocks)"
      },
      {
        id: 4,
        title: "The Legend of Zelda: Ocarina of Time (1998)",
        description: "Adventure masterpiece often cited as one of the greatest games ever made.",
        longDescription: "The Legend of Zelda: Ocarina of Time follows Link on a quest to stop Ganondorf, king of the Gerudo tribe, from obtaining the Triforce, a sacred relic that grants the wishes of its holder. The game features time travel mechanics, allowing players to control both child and adult versions of Link as they navigate dungeons, solve puzzles, and battle enemies.",
        image: "/images/games/zelda.jpg",
        company: "Nintendo",
        releaseDate: "November 21, 1998",
        platform: "Nintendo 64",
        genre: "Action-Adventure",
        rating: 5.0,
        requirements: "Nintendo 64 console, Controller"
      },
      {
        id: 5,
        title: "Sonic the Hedgehog (1991)",
        description: "Sega's speedy mascot that challenged Nintendo's dominance.",
        longDescription: "Sonic the Hedgehog introduced Sega's mascot character and was designed to showcase the processing power of the Sega Genesis. The game follows Sonic as he speeds through levels using his super-fast running ability to collect rings and defeat Dr. Robotnik, who has imprisoned animals inside robots.",
        image: "/images/games/sonic.jpg",
        company: "Sega",
        releaseDate: "June 23, 1991",
        platform: "Sega Genesis",
        genre: "Platformer",
        rating: 4.5,
        requirements: "Sega Genesis console, Controller"
      },
      {
        id: 6,
        title: "Street Fighter II (1991)",
        description: "Fighting game phenomenon that dominated arcades worldwide.",
        longDescription: "Street Fighter II revolutionized the fighting game genre with its competitive gameplay and diverse cast of characters from around the world, each with unique fighting styles and special moves. Players compete in one-on-one matches, using a six-button control scheme to execute a variety of attacks and special techniques.",
        image: "/images/games/streetfighter.jpg",
        company: "Capcom",
        releaseDate: "February 6, 1991",
        platform: "Arcade, SNES",
        genre: "Fighting",
        rating: 4.7,
        requirements: "SNES console, Controller"
      },
      {
        id: 7,
        title: "Resident Evil (1996)",
        description: "Survival horror game that defined the genre with its tense atmosphere.",
        longDescription: "Resident Evil follows members of an elite task force who are trapped in a mansion filled with zombies and other monsters. Players must solve puzzles, manage limited resources, and fight or evade enemies to uncover the secrets of the Umbrella Corporation's experiments.",
        image: "/images/games/residentevil.jpg",
        company: "Capcom",
        releaseDate: "March 22, 1996",
        platform: "PlayStation",
        genre: "Survival Horror",
        rating: 4.6,
        requirements: "PlayStation console, Memory Card (1 block)"
      },
      {
        id: 8,
        title: "Quake (1996)",
        description: "Pioneering 3D shooter that pushed multiplayer gaming forward.",
        longDescription: "Quake was a technical marvel that featured fully 3D environments and models, revolutionizing the first-person shooter genre. The game includes a single-player campaign against various monsters and multiplayer deathmatch modes that became extremely popular, helping to establish competitive online gaming.",
        image: "/images/games/quake.jpg",
        company: "id Software",
        releaseDate: "June 22, 1996",
        platform: "MS-DOS",
        genre: "First-person shooter",
        rating: 4.7,
        requirements: "486DX4-100, 16MB RAM, SVGA graphics"
      },
      {
        id: 9,
        title: "Myst (1993)",
        description: "Puzzle adventure that showcased the potential of CD-ROM technology.",
        longDescription: "Myst is a graphic adventure puzzle game that takes place on a mysterious island. Players explore pre-rendered environments from a first-person perspective, solving intricate puzzles that reveal the story of the island's creator and his sons. The game was known for its stunning visuals and immersive atmosphere.",
        image: "/images/games/myst.jpg",
        company: "Cyan",
        releaseDate: "September 24, 1993",
        platform: "Mac OS, Windows",
        genre: "Puzzle Adventure",
        rating: 4.4,
        requirements: "486/33 MHz, 4MB RAM, 2x CD-ROM drive, SVGA graphics"
      },
      {
        id: 10,
        title: "Tomb Raider (1996)",
        description: "Action-adventure featuring iconic heroine Lara Croft.",
        longDescription: "Tomb Raider follows archaeologist Lara Croft as she searches for ancient artifacts across dangerous tombs and ruins around the world. The game combined platforming, puzzle-solving, and combat in fully 3D environments, and its protagonist became one of gaming's most recognizable characters.",
        image: "/images/games/tombraider.jpg",
        company: "Core Design",
        releaseDate: "October 25, 1996",
        platform: "PlayStation, Sega Saturn, MS-DOS",
        genre: "Action-Adventure",
        rating: 4.5,
        requirements: "Pentium 60MHz, 16MB RAM, 2x CD-ROM drive"
      }
    ];

    const foundGame = games.find(g => g.id === parseInt(id));
    
    // Simulate loading delay for retro feel
    setTimeout(() => {
      setGame(foundGame || null);
      setLoading(false);
    }, 1500);
  }, [id]);

  if (loading) {
    return (
      <main className="retro-container py-8">
        <div className="bg-retro-darkgray border-2 border-retro-purple p-8 text-center">
          <h1 className="text-retro-teal font-pixel text-2xl mb-4">LOADING GAME DATA...</h1>
          <div className="w-full bg-retro-black h-6 border border-retro-blue">
            <div className="bg-retro-green h-full animate-pulse" style={{width: '60%'}}></div>
          </div>
          <p className="mt-4 text-retro-yellow font-pixel blink">Please wait while data loads from CD-ROM...</p>
        </div>
      </main>
    );
  }

  if (!game) {
    return (
      <main className="retro-container py-8">
        <div className="bg-retro-darkgray border-2 border-retro-purple p-8 text-center">
          <h1 className="text-retro-pink font-pixel text-2xl mb-4">ERROR 404</h1>
          <p className="text-retro-yellow font-comic mb-6">Game not found! The file may be corrupted or missing.</p>
          <Link href="/games" className="retro-button">
            Return to Games
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="retro-container py-8">
      <Link href="/games" className="inline-flex items-center font-pixel text-retro-teal hover:text-retro-pink mb-6">
        <ChevronLeft size={20} />
        <span>Back to Games List</span>
      </Link>
      
      <div className="bg-retro-darkgray border-2 border-retro-purple mb-8">
        <div className="bg-retro-black p-2 border-b-2 border-retro-purple">
          <h1 className="text-retro-orange font-pixel text-2xl text-center">{game.title}</h1>
        </div>
        
        <div className="p-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="bg-retro-black border-2 border-retro-blue p-2 h-60 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <p className="text-retro-orange font-pixel text-center absolute">
                    [IMAGE LOADING...]
                  </p>
                </div>
              </div>
              
              <div className="mt-4 bg-retro-black border-2 border-retro-green p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-retro-yellow font-pixel">Rating:</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(game.rating) ? "text-retro-orange" : "text-gray-600"}
                        fill={i < Math.floor(game.rating) ? "#FF8800" : "none"}
                      />
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-retro-purple hover:bg-retro-blue text-retro-yellow font-pixel py-2 px-3 flex items-center justify-center mt-4">
                  <Download size={16} className="mr-2" />
                  DOWNLOAD NOW!
                </button>
                
                <div className="mt-4 text-xs text-retro-pink font-pixel blink text-center">
                  * SHAREWARE VERSION *
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-retro-black border-2 border-retro-purple p-4 mb-4">
                <h2 className="text-retro-teal font-pixel mb-2 text-xl">Game Info</h2>
                <p className="text-retro-yellow font-comic mb-4">{game.longDescription}</p>
                
                <div className="h-1 bg-gradient-to-r from-retro-blue to-retro-purple my-4"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  <div>
                    <span className="text-retro-pink font-pixel">Developer:</span>
                    <span className="text-white font-courier ml-2">{game.company}</span>
                  </div>
                  <div>
                    <span className="text-retro-pink font-pixel">Release Date:</span>
                    <span className="text-white font-courier ml-2">{game.releaseDate}</span>
                  </div>
                  <div>
                    <span className="text-retro-pink font-pixel">Platform:</span>
                    <span className="text-white font-courier ml-2">{game.platform}</span>
                  </div>
                  <div>
                    <span className="text-retro-pink font-pixel">Genre:</span>
                    <span className="text-white font-courier ml-2">{game.genre}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-retro-black border-2 border-retro-purple p-4">
                <h2 className="text-retro-teal font-pixel mb-2 flex items-center">
                  <Info size={16} className="mr-2" />
                  System Requirements
                </h2>
                <p className="text-retro-green font-courier">{game.requirements}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <div className="bg-retro-darkgray border-2 border-retro-pink p-4 max-w-2xl mx-auto">
          <p className="text-retro-yellow font-pixel blink">
            SCREENSHOTS AND CHEAT CODES COMING SOON!
          </p>
          <p className="text-retro-teal font-comic text-sm mt-2">
            ©1999 Retro Time Machine - All rights reserved
          </p>
        </div>
      </div>
    </main>
  )
}

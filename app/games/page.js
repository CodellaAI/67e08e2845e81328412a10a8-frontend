
import Image from 'next/image'

export default function GamesPage() {
  const games = [
    {
      id: 1,
      title: "Doom (1993)",
      description: "First-person shooter that defined a genre and pushed PC gaming to new heights.",
      image: "/images/games/doom.jpg",
      company: "id Software"
    },
    {
      id: 2,
      title: "Super Mario 64 (1996)",
      description: "Groundbreaking 3D platformer that revolutionized game design.",
      image: "/images/games/mario64.jpg",
      company: "Nintendo"
    },
    {
      id: 3,
      title: "Final Fantasy VII (1997)",
      description: "Epic RPG that brought the genre to mainstream popularity.",
      image: "/images/games/ff7.jpg",
      company: "Square"
    },
    {
      id: 4,
      title: "The Legend of Zelda: Ocarina of Time (1998)",
      description: "Adventure masterpiece often cited as one of the greatest games ever made.",
      image: "/images/games/zelda.jpg",
      company: "Nintendo"
    },
    {
      id: 5,
      title: "Sonic the Hedgehog (1991)",
      description: "Sega's speedy mascot that challenged Nintendo's dominance.",
      image: "/images/games/sonic.jpg",
      company: "Sega"
    },
    {
      id: 6,
      title: "Street Fighter II (1991)",
      description: "Fighting game phenomenon that dominated arcades worldwide.",
      image: "/images/games/streetfighter.jpg",
      company: "Capcom"
    },
    {
      id: 7,
      title: "Resident Evil (1996)",
      description: "Survival horror game that defined the genre with its tense atmosphere.",
      image: "/images/games/residentevil.jpg",
      company: "Capcom"
    },
    {
      id: 8,
      title: "Quake (1996)",
      description: "Pioneering 3D shooter that pushed multiplayer gaming forward.",
      image: "/images/games/quake.jpg",
      company: "id Software"
    },
    {
      id: 9,
      title: "Myst (1993)",
      description: "Puzzle adventure that showcased the potential of CD-ROM technology.",
      image: "/images/games/myst.jpg",
      company: "Cyan"
    },
    {
      id: 10,
      title: "Tomb Raider (1996)",
      description: "Action-adventure featuring iconic heroine Lara Croft.",
      image: "/images/games/tombraider.jpg",
      company: "Core Design"
    }
  ];

  return (
    <main className="retro-container py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-pixel text-retro-teal mb-4">
          <Image 
            src="/images/games.gif" 
            alt="Games" 
            width={30} 
            height={30}
            className="inline mr-2"
          />
          Totally Rad 90s Games
          <Image 
            src="/images/games.gif" 
            alt="Games" 
            width={30} 
            height={30}
            className="inline ml-2"
          />
        </h1>
        <div className="w-full max-w-3xl mx-auto bg-retro-darkgray border-2 border-retro-purple p-4">
          <p className="text-retro-yellow font-comic">
            These games defined a generation and changed gaming forever! 
            Before streaming and 4K graphics, we had pixelated glory and 
            cartridges you had to blow into to make them work.
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-retro-blue via-retro-pink to-retro-teal my-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map((game) => (
          <div 
            key={game.id} 
            className="bg-retro-darkgray border-2 border-retro-purple hover:border-retro-teal transition-colors p-4"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 mb-4 sm:mb-0 relative h-40">
                <div className="absolute inset-0 bg-retro-black flex items-center justify-center border-2 border-retro-blue">
                  <p className="text-retro-orange font-pixel text-center">
                    [IMAGE LOADING...]
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-4">
                <h2 className="text-retro-orange font-pixel text-xl mb-2">
                  {game.title}
                </h2>
                <p className="text-retro-yellow font-comic mb-2">
                  {game.description}
                </p>
                <p className="text-retro-teal font-pixel text-sm">
                  Developer: {game.company}
                </p>
                <div className="mt-2">
                  <button className="bg-retro-purple hover:bg-retro-blue text-retro-yellow font-pixel py-1 px-3 text-sm">
                    DOWNLOAD NOW!
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <div className="bg-retro-darkgray border-2 border-retro-pink p-4 max-w-2xl mx-auto">
          <p className="text-retro-yellow font-pixel blink">
            UNDER CONSTRUCTION! More games coming soon!
          </p>
          <p className="text-retro-teal font-comic text-sm mt-2">
            Best viewed in Netscape Navigator 4.0 at 800x600 resolution
          </p>
        </div>
      </div>
    </main>
  )
}

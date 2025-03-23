
import Image from 'next/image'
import Link from 'next/link'
import { Terminal, Shield, Code, Wifi, Zap, Gamepad2, Lock, Server, Database } from 'lucide-react'
import RetroCounter from '../components/RetroCounter'

export default function Home() {
  // Sample games data for the homepage
  const featuredGames = [
    {
      id: 1,
      title: "Uplink (2001)",
      image: "/images/games/uplink.jpg",
      company: "Introversion Software"
    },
    {
      id: 2,
      title: "Hacknet (2015)",
      image: "/images/games/hacknet.jpg",
      company: "Team Fractal Alligator"
    },
    {
      id: 3,
      title: "System Shock (1994)",
      image: "/images/games/systemshock.jpg",
      company: "Looking Glass Technologies"
    },
    {
      id: 4,
      title: "Deus Ex (2000)",
      image: "/images/games/deusx.jpg",
      company: "Ion Storm"
    }
  ];

  return (
    <main className="retro-container py-8">
      <div className="text-center mb-12">
        <div className="terminal-window mb-6">
          <div className="terminal-header">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-matrix-red"></div>
              <div className="w-3 h-3 rounded-full bg-matrix-dim"></div>
              <div className="w-3 h-3 rounded-full bg-matrix-green"></div>
            </div>
            <div className="terminal-title">main.terminal</div>
            <div></div>
          </div>
          <div className="p-2">
            <p className="code-text">$ <span className="animate-blink">_</span></p>
            <p className="code-text">$ initiating_sequence</p>
            <p className="code-text">$ accessing_mainframe...</p>
            <p className="code-text">$ connection_established</p>
            <p className="code-text">$ <span className="text-matrix-green font-bold">ACCESS GRANTED</span></p>
            <h1 className="retro-title mt-4" data-text="WELCOME TO THE MATRIX">WELCOME TO THE MATRIX</h1>
          </div>
        </div>
        
        <div className="marquee-container my-6">
          <div className="marquee-text">
            [WARNING]: This is a secure terminal. Unauthorized access will be prosecuted. All activities are being monitored.
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="retro-card">
          <h2 className="retro-subtitle">System Features</h2>
          <ul className="space-y-3 text-matrix-green font-terminal">
            <li className="flex items-start">
              <Shield className="text-matrix-green mr-2 flex-shrink-0" size={20} />
              <span>Advanced Encryption</span>
            </li>
            <li className="flex items-start">
              <Wifi className="text-matrix-green mr-2 flex-shrink-0" size={20} />
              <span>Secure Network Access</span>
            </li>
            <li className="flex items-start">
              <Code className="text-matrix-green mr-2 flex-shrink-0" size={20} />
              <span>Backdoor Scripts</span>
            </li>
          </ul>
          <button className="retro-button mt-4 w-full">
            $ Execute
          </button>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">System Logs</h2>
          <div className="space-y-3 text-matrix-green font-terminal">
            <p>12/15/2023: Firewall updated</p>
            <p>12/10/2023: Patched security vulnerabilities</p>
            <p>12/01/2023: System initialized</p>
          </div>
          <div className="mt-4 p-2 bg-hacker-black border-2 border-matrix-green flex justify-center">
            <div className="animate-pulse">
              <div className="code-text">[ SYSTEM ACTIVE ]</div>
            </div>
          </div>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">Network Nodes</h2>
          <ul className="space-y-3">
            <li><a href="#" className="retro-link">192.168.1.1</a></li>
            <li><a href="#" className="retro-link">darkweb.onion</a></li>
            <li><a href="#" className="retro-link">secure.terminal</a></li>
            <li><a href="#" className="retro-link">irc.hacker.net</a></li>
          </ul>
          <div className="mt-4 flex justify-center">
            <div className="px-4 py-2 bg-hacker-black border border-matrix-green">
              <p className="code-text text-sm">Ping: 23ms | Uptime: 99.7%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="retro-divider"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="retro-card">
          <h2 className="retro-subtitle">Terminal Info</h2>
          <p className="retro-text mb-4">
            This terminal provides access to the underground network of digital systems. 
            Navigate with caution. All actions are logged and monitored.
          </p>
          <p className="retro-text">
            Built with quantum encryption and neural-network intrusion detection.
          </p>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle">Access Counter</h2>
          <div className="flex justify-center my-4">
            <RetroCounter count={1337} />
          </div>
          <p className="retro-text text-center">
            You are access attempt #1,337
          </p>
          <div className="mt-4 flex justify-center">
            <div className="px-4 py-2 bg-hacker-black border border-matrix-green">
              <p className="code-text text-sm animate-blink">SYSTEM MONITORING</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="under-construction mb-12">
        <Terminal className="text-matrix-green" size={24} />
        <span>SYSTEM UPGRADE IN PROGRESS - STANDBY FOR UPDATES</span>
        <Terminal className="text-matrix-green" size={24} />
      </div>
      
      <div className="terminal-window mb-12">
        <div className="terminal-header">
          <div className="terminal-title">secure_message.sh</div>
        </div>
        <form className="space-y-4 max-w-md mx-auto p-4">
          <div>
            <label className="block font-terminal text-matrix-green mb-2">Username:</label>
            <input 
              type="text" 
              className="w-full bg-hacker-black text-matrix-green border-2 border-matrix-green p-2 font-terminal focus:outline-none focus:ring-2 focus:ring-matrix-cyan"
            />
          </div>
          <div>
            <label className="block font-terminal text-matrix-green mb-2">Encryption Key:</label>
            <input 
              type="password" 
              className="w-full bg-hacker-black text-matrix-green border-2 border-matrix-green p-2 font-terminal focus:outline-none focus:ring-2 focus:ring-matrix-cyan"
            />
          </div>
          <div>
            <label className="block font-terminal text-matrix-green mb-2">Message:</label>
            <textarea 
              rows="4" 
              className="w-full bg-hacker-black text-matrix-green border-2 border-matrix-green p-2 font-terminal focus:outline-none focus:ring-2 focus:ring-matrix-cyan"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="retro-button">
              $ Transmit
            </button>
          </div>
        </form>
      </div>
      
      {/* Games Section Added */}
      <div className="mb-12">
        <div className="text-center mb-6">
          <h2 className="retro-subtitle flex items-center justify-center">
            <Gamepad2 className="text-matrix-green mr-2" size={24} />
            Cyberpunk Games Database
            <Gamepad2 className="text-matrix-green ml-2" size={24} />
          </h2>
          <p className="font-terminal text-matrix-dim mb-4">Access these classic hacker-themed games from our secure server</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredGames.map((game) => (
            <Link href={`/games/${game.id}`} key={game.id}>
              <div className="bg-hacker-terminal border-2 border-matrix-green hover:border-matrix-cyan p-3 cursor-pointer transition-colors">
                <div className="bg-hacker-black border border-matrix-dim h-32 flex items-center justify-center mb-2">
                  <p className="text-matrix-green font-terminal text-center text-sm">
                    [LOADING DATA...]
                  </p>
                </div>
                <h3 className="font-pixel text-matrix-green text-center truncate">{game.title}</h3>
                <p className="text-matrix-dim font-terminal text-xs text-center">{game.company}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Link href="/games" className="retro-button inline-flex items-center">
            <span>$ Access Database</span>
            <Database className="ml-2" size={18} />
          </Link>
        </div>
      </div>
      
      <div className="terminal-window mb-12">
        <div className="terminal-header">
          <div className="terminal-title">status.log</div>
        </div>
        <div className="p-4 font-terminal text-matrix-green text-sm">
          <p>System: <span className="text-matrix-cyan">ONLINE</span></p>
          <p>Memory: <span className="text-matrix-cyan">4.2GB / 8GB</span></p>
          <p>CPU: <span className="text-matrix-cyan">32%</span></p>
          <p>Network: <span className="text-matrix-cyan">SECURE</span></p>
          <p>Last Login: <span className="text-matrix-cyan">12/15/2023 21:42:17</span></p>
          <p>Status: <span className="text-matrix-cyan animate-blink">MONITORING</span></p>
        </div>
      </div>
    </main>
  )
}

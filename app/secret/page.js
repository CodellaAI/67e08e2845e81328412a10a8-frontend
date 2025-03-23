
export default function SecretPage() {
  return (
    <div className="retro-container py-10">
      <div className="terminal-window scanner">
        <div className="terminal-header">
          <h2 className="terminal-title">TOP SECRET TERMINAL</h2>
          <span className="text-matrix-green text-xs">ACCESS GRANTED</span>
        </div>
        
        <div className="mt-6">
          <h1 className="retro-subtitle glitch-effect" data-text="CLASSIFIED INFORMATION">CLASSIFIED INFORMATION</h1>
          
          <div className="retro-card mt-6 hover-glow">
            <p className="retro-text mb-4">You've discovered the secret area. This information is for your eyes only.</p>
            <div className="retro-divider"></div>
            <p className="retro-text code-text animate-pulse">
              &gt; Decrypting secure files...<br/>
              &gt; Bypassing security protocols...<br/>
              &gt; Accessing mainframe...<br/>
              &gt; Data breach successful!
            </p>
            
            <div className="mt-6 bg-hacker-dark p-4 border border-matrix-green">
              <p className="retro-text mb-2">The truth is out there...</p>
              <p className="retro-text">But so are lies.</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <a href="/" className="retro-button button-hover-effect">RETURN TO MAIN TERMINAL</a>
          </div>
        </div>
      </div>
    </div>
  )
}

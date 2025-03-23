
import RetroNavbar from './RetroNavbar'
import RetroFooter from './RetroFooter'

export default function RetroLayout({ children }) {
  return (
    <div className="min-h-screen bg-hacker-grid bg-grid bg-hacker-black">
      <div className="max-w-6xl mx-auto bg-hacker-dark min-h-screen shadow-[0_0_40px_rgba(0,255,0,0.2)]">
        <RetroNavbar />
        <div className="border-x-2 border-matrix-green scanner">
          {children}
        </div>
        <RetroFooter />
      </div>
    </div>
  )
}


import RetroNavbar from './RetroNavbar'
import RetroFooter from './RetroFooter'

export default function RetroLayout({ children }) {
  return (
    <div className="min-h-screen bg-checkerboard bg-[length:20px_20px]">
      <div className="max-w-6xl mx-auto bg-retro-black min-h-screen shadow-[0_0_40px_rgba(0,255,255,0.3)]">
        <RetroNavbar />
        <div className="border-x-4 border-retro-purple">
          {children}
        </div>
        <RetroFooter />
      </div>
    </div>
  )
}

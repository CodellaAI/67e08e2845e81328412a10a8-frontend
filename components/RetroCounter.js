
export default function RetroCounter({ count }) {
  // Convert count to string and pad with zeros if needed
  const countStr = count.toString().padStart(6, '0');
  
  return (
    <div className="flex">
      {countStr.split('').map((digit, index) => (
        <div 
          key={index}
          className="w-8 h-12 bg-black border-2 border-retro-green flex items-center justify-center mx-0.5"
        >
          <span className="font-pixel text-2xl text-retro-green">{digit}</span>
        </div>
      ))}
    </div>
  )
}


import { Book, MessageSquare, UserCheck, Calendar } from 'lucide-react'

export default function Guestbook() {
  const guestbookEntries = [
    {
      name: "CoolDude2000",
      date: "December 10, 2023",
      email: "cooldude@aol.com",
      message: "Awesome site! Reminds me of the good old days of the web. Keep up the great work!"
    },
    {
      name: "WebSurfer95",
      date: "December 8, 2023",
      email: "surfer@prodigy.net",
      message: "This is the most radical site I've seen in ages! Love the GIFs!"
    },
    {
      name: "RetroFan",
      date: "December 5, 2023",
      email: "retrofan@geocities.com",
      message: "Your site is totally tubular! I've added you to my bookmarks!"
    }
  ];

  return (
    <main className="retro-container py-8">
      <h1 className="retro-title">GUESTBOOK</h1>
      
      <div className="marquee-container my-6">
        <div className="marquee-text">
          Sign my guestbook and let me know you stopped by! Don't forget to add your email address so I can contact you!
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="retro-card">
          <h2 className="retro-subtitle flex items-center">
            <Book className="text-retro-pink mr-2" size={24} />
            <span>Sign My Guestbook</span>
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block font-courier text-white mb-2">Name:</label>
              <input 
                type="text" 
                className="w-full bg-black text-retro-green border-2 border-retro-green p-2 font-courier focus:outline-none focus:ring-2 focus:ring-retro-teal"
                required
              />
            </div>
            <div>
              <label className="block font-courier text-white mb-2">Email:</label>
              <input 
                type="email" 
                className="w-full bg-black text-retro-green border-2 border-retro-green p-2 font-courier focus:outline-none focus:ring-2 focus:ring-retro-teal"
                required
              />
            </div>
            <div>
              <label className="block font-courier text-white mb-2">Website (optional):</label>
              <input 
                type="url" 
                className="w-full bg-black text-retro-green border-2 border-retro-green p-2 font-courier focus:outline-none focus:ring-2 focus:ring-retro-teal"
                placeholder="http://"
              />
            </div>
            <div>
              <label className="block font-courier text-white mb-2">Message:</label>
              <textarea 
                rows="4" 
                className="w-full bg-black text-retro-green border-2 border-retro-green p-2 font-courier focus:outline-none focus:ring-2 focus:ring-retro-teal"
                required
              ></textarea>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="newsletter" 
                className="bg-black border-2 border-retro-green text-retro-green focus:ring-retro-teal"
              />
              <label htmlFor="newsletter" className="font-courier text-white">
                Add me to your mailing list
              </label>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="retro-button">
                Submit
              </button>
            </div>
          </form>
        </div>
        
        <div className="retro-card">
          <h2 className="retro-subtitle flex items-center">
            <MessageSquare className="text-retro-teal mr-2" size={24} />
            <span>Guestbook Rules</span>
          </h2>
          <ul className="space-y-3 text-white font-courier">
            <li>• Be nice and respectful</li>
            <li>• No spam or inappropriate content</li>
            <li>• Keep your messages PG-rated</li>
            <li>• Tell me how you found my site</li>
            <li>• Let me know if any links are broken</li>
          </ul>
          <div className="mt-6 p-3 bg-retro-black border-2 border-retro-yellow text-center">
            <p className="font-pixel text-retro-yellow animate-blink">
              All entries are moderated!
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="font-courier text-white">
              Your entry will appear after I approve it. I check my guestbook every few days.
            </p>
          </div>
        </div>
      </div>
      
      <div className="retro-divider"></div>
      
      <div className="mb-12">
        <h2 className="retro-subtitle text-center mb-6">Recent Guestbook Entries</h2>
        
        <div className="space-y-6">
          {guestbookEntries.map((entry, index) => (
            <div key={index} className="retro-card">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <UserCheck className="text-retro-green mr-2" size={20} />
                  <h3 className="font-pixel text-xl text-retro-green">{entry.name}</h3>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-retro-yellow mr-2" size={16} />
                  <span className="font-courier text-retro-yellow text-sm">{entry.date}</span>
                </div>
              </div>
              <p className="retro-text mb-3">{entry.message}</p>
              <p className="font-courier text-retro-teal text-sm">Email: {entry.email}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="retro-button">
            View More Entries
          </button>
        </div>
      </div>
      
      <div className="bg-retro-darkgray p-6 border-4 border-dashed border-retro-purple text-center">
        <h2 className="retro-subtitle">Get Your Own Free Guestbook!</h2>
        <p className="retro-text mb-4">
          Want a cool guestbook like this for your site? Click below to get your own free guestbook!
        </p>
        <button className="retro-button">
          Get Free Guestbook
        </button>
      </div>
    </main>
  )
}

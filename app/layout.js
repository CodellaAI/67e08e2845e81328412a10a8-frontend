
import './globals.css'
import RetroLayout from '../components/RetroLayout'

export const metadata = {
  title: 'Retro Time Machine',
  description: 'A nostalgic journey back to 90s web design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-retro-black min-h-screen">
        <RetroLayout>{children}</RetroLayout>
      </body>
    </html>
  )
}

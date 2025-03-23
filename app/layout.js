
import './globals.css'
import RetroLayout from '../components/RetroLayout'

export const metadata = {
  title: 'Hacker Terminal',
  description: 'A nostalgic journey to 90s hacker aesthetics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-hacker-black min-h-screen">
        <RetroLayout>{children}</RetroLayout>
      </body>
    </html>
  )
}

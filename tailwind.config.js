
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['VT323', 'monospace'],
        terminal: ['Share Tech Mono', 'monospace'],
      },
      colors: {
        'hacker-black': '#0a0a0a',
        'hacker-dark': '#111111',
        'hacker-terminal': '#121212',
        'hacker-grid': '#0f0f0f',
        'matrix-green': '#00ff00',
        'matrix-dim': '#00aa00',
        'matrix-dark': '#005500',
        'matrix-cyan': '#00ffff',
        'matrix-red': '#ff0000',
      },
      backgroundImage: {
        'grid': "url('/images/grid-pattern.png')",
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scan': 'scan 3s linear infinite',
        'marquee': 'marquee 20s linear infinite',
        'glitch-1': 'glitch-1 3s infinite',
        'glitch-2': 'glitch-2 2.5s infinite',
        'glitch-text': 'glitch-text 0.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'border-pulse': 'border-pulse 1.5s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          black: '#000000',
          darkgray: '#1a1a1a',
          purple: '#9900ff',
          pink: '#ff00ff',
          teal: '#00ffff',
          green: '#00ff00',
          yellow: '#ffff00',
          orange: '#ff9900',
          red: '#ff0000',
          blue: '#0000ff',
        },
      },
      fontFamily: {
        'pixel': ['VT323', 'monospace'],
        'comic': ['Comic Sans MS', 'Comic Sans', 'cursive'],
        'courier': ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'marquee': 'marquee 15s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'stars': 'url("/images/stars.gif")',
        'checkerboard': 'repeating-conic-gradient(#222 0% 25%, #333 0% 50%)',
      },
    },
  },
  plugins: [],
}

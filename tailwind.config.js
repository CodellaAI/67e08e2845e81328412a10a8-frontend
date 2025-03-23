
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
        hacker: {
          dark: '#0a0a0a',
          terminal: '#121212',
          black: '#000000',
        },
        matrix: {
          green: '#00ff00',
          dim: '#00cc00',
          dark: '#006600',
          cyan: '#00ffff',
          red: '#ff0000',
        }
      },
      fontFamily: {
        'pixel': ['VT323', 'monospace'],
        'comic': ['Comic Sans MS', 'Comic Sans', 'cursive'],
        'courier': ['Courier New', 'Courier', 'monospace'],
        'terminal': ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'marquee': 'marquee 15s linear infinite',
        'scan': 'scan 4s linear infinite',
        'glitch-1': 'glitch-1 2s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 3s infinite linear alternate-reverse',
        'matrix': 'matrix-rain 20s linear infinite',
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
        scan: {
          '0%': { top: '-5%' },
          '100%': { top: '105%' },
        },
      },
      backgroundImage: {
        'matrix': 'url("/images/matrix-bg.gif")',
        'circuit': 'url("/images/circuit-bg.png")',
        'hacker-grid': 'linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [],
}

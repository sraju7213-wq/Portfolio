/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.tsx",
    "./components/**/*.tsx",
    "./data/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#07070a',
          surface: '#111114',
          card: '#16161a',
          elevated: '#1c1c22',
        },
        border: {
          subtle: '#1e1e24',
          muted: '#2a2a32',
        },
        accent: {
          cyan: '#00e5ff',
          violet: '#8b5cf6',
        },
        text: {
          primary: '#ffffff',
          secondary: '#8b8b94',
          muted: '#5a5a64',
        },
      },
      fontFamily: {
        heading: ['"Clash Display"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'orb-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.4' },
          '25%': { transform: 'translate(80px, -60px) scale(1.1)', opacity: '0.6' },
          '50%': { transform: 'translate(-40px, -120px) scale(0.9)', opacity: '0.3' },
          '75%': { transform: 'translate(60px, -40px) scale(1.05)', opacity: '0.5' },
        },
        'orb-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '25%': { transform: 'translate(-60px, 80px) scale(1.15)', opacity: '0.5' },
          '50%': { transform: 'translate(100px, 40px) scale(0.85)', opacity: '0.4' },
          '75%': { transform: 'translate(-80px, -60px) scale(1.1)', opacity: '0.35' },
        },
        'orb-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.25' },
          '33%': { transform: 'translate(120px, 60px) scale(1.2)', opacity: '0.45' },
          '66%': { transform: 'translate(-60px, 100px) scale(0.8)', opacity: '0.3' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'orb-1': 'orb-1 20s ease-in-out infinite',
        'orb-2': 'orb-2 25s ease-in-out infinite',
        'orb-3': 'orb-3 18s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
};

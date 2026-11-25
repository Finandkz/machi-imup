/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FF8DA1',
          lightPink: '#FFB6C1',
          darkPink: '#FF6B81',
          peach: '#FFD3B6',
          cream: '#FFFDF9',
          yellow: '#FFE066',
          purple: '#E8D7FF',
          dark: '#4A3E3D',
          muted: '#7D6E6D',
        }
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        mali: ['Mali', 'cursive'],
        caveat: ['Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}

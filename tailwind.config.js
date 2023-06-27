/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    colors: {
      blue: {
        main: '#0077F4',
        light: '#E6F3FF',
        background: '#F0F8FF',
      },
      black: '#1C3C50',
      gray: '#858da8',
      white: '#fff',
    },
    extend: {
      fontSize: {
        h1: '4.5rem',
        h2: '2.1rem',
        h3: '2.4rem',
      },
      width: {
        card: '22.5rem',
      },
      maxWidth: {
        card: '22.5rem',
        '8xl': '92rem',
      },
      height: {
        card: '18.12rem',
      },
      maxHeight: {
        card: '18.12rem',
      },
      margin: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}

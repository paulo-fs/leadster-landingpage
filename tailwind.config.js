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
      gray: '#627397',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
}

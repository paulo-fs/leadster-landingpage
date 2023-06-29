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
        buttonLight: '#C2E6FF',
        buttonMedium: '#A1D9FF',
        buttonDark: '#0077F4',
      },
      green: {
        buttonLight: '#C2F4EA',
        buttonMedium: '#9FEFDF',
        buttonDark: '#00AE7F',
      },
      yellow: {
        buttonLight: '#FFF8D0',
        buttonMedium: '#FFF1A0',
        buttonDark: '#A68E1C',
      },
      grayButton: {
        buttonLight: '#E8EEF3',
        buttonMedium: '#D0DEE7',
        buttonDark: '#77848C',
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
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}

import { colors } from './src/styles/tokens/colors'

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
        main: colors.blueMain,
        light: colors.blueLight,
        background: colors.blueBackground,
        buttonLight: colors.blueButtonLight,
        buttonMedium: colors.blueButtonMedium,
        buttonDark: colors.blueButtonDark,
      },
      green: {
        buttonLight: colors.greenButtonLight,
        buttonMedium: colors.greenButtonMedium,
        buttonDark: colors.greenButtonDark,
      },
      yellow: {
        buttonLight: colors.yellowButtonLight,
        buttonMedium: colors.yellowButtonMedium,
        buttonDark: colors.yellowButtonDark,
      },
      grayButton: {
        buttonLight: colors.grayButtonLight,
        buttonMedium: colors.grayButtonMedium,
        buttonDark: colors.grayButtonDark,
      },
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
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
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
}

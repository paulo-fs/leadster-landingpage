import { w, W } from 'windstitch'

export const StyledButton = w.button('', {
  variants: {
    type: {
      primary: `
        border
        border-black
      `,
      secondary: '',
    },
  },
})

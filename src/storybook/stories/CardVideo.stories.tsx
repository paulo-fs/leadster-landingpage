import type { StoryObj, Meta } from '@storybook/react'
import { CardVideo, CardVideoComponentProps } from '../../components'

export default {
  title: 'Cards/CardVideo',
  component: CardVideo,
  args: {
    title: 'Título do card',
  },
  argTypes: {
    title: {
      defaultValue: 'Título do card',
      control: {
        type: 'text'
      }
    }
  }
} as Meta<CardVideoComponentProps>

export const Card: StoryObj<CardVideoComponentProps> = {}

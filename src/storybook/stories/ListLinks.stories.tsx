import type { StoryObj, Meta } from '@storybook/react'
import { LinksList, ListLinksComponentProps } from '../../components'

export default {
  title: 'Links/List',
  component: LinksList,
  args: {
    title: 'Lista de links',
    list: [
      {
        text: 'Primeiro link',
        url: 'https://'
      },
      {
        text: 'Segundo link',
        url: 'https://'
      },
      {
        text: 'Terceiro link',
        url: 'https://'
      }
    ]
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      }
    },
    list: {
      control: {
        type: 'object',
      }
    }
  }
} as Meta<ListLinksComponentProps>

export const Links: StoryObj<ListLinksComponentProps> = {

}

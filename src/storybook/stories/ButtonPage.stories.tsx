import type { StoryObj, Meta } from '@storybook/react'
import { ButtonPage, ButtonComponentProps } from '../../components'

export default {
  title: 'Buttons/PaginationButton',
  component: ButtonPage,
  args: {
    children: '1',
    isActive: false,
  },
  argTypes: {
    children: {
      defaultValue: '1',
      control: {
        type: 'text'
      }
    }
  }
} as Meta<ButtonComponentProps>

export const PaginationButton: StoryObj<ButtonComponentProps> = {
  args: {
    isActive: false,
    children: '1'
  }
}

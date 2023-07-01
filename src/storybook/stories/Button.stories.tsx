import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonComponentProps } from '../../components'

export default {
  title: 'Buttons/Button',
  component: Button,
  args: {
    children: 'Button',
    primary: false,
  },
  argTypes: {
    primary: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    isActive: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onClick: {
      action: 'click'
    }
  }
} as Meta<ButtonComponentProps>

export const Primary: StoryObj<ButtonComponentProps> ={
  args: {
    primary: true,
  }
}

export const Secondary: StoryObj<ButtonComponentProps> = {}

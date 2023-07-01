import type { Meta, StoryObj } from '@storybook/react'
import { ButtonRounded, ButtonRoundedComponentProps } from '../../components'
import { LinkedInIcon } from '../../components/LinksList/LinkSocialMedia/Icons/LinkedIn'
import { FacebookIcon } from '../../components/LinksList/LinkSocialMedia/Icons/Facebook'
import { InstagramIcon } from '../../components/LinksList/LinkSocialMedia/Icons/Instagram'

export default {
  title:'Buttons/SocialMedia',
  component: ButtonRounded,
  args: {
    children: <LinkedInIcon className='fill-gray group-hover:fill-white transition' />,
    url: '',
    target: '_blank'
  },
  argTypes: {
    children: {
      control: {
        type: 'none'
      }
    },
    url: {
      control: {
        type: 'text',
      }
    },
    target: {
      control: {
        type: 'text'
      }
    }
  },
} as Meta<ButtonRoundedComponentProps>

export const LinkedIn: StoryObj<ButtonRoundedComponentProps> = {}

export const Facebook: StoryObj<ButtonRoundedComponentProps> = {
  args: {
    children: <FacebookIcon className='fill-gray group-hover:fill-white transition' />
  }
}

export const Instagram: StoryObj<ButtonRoundedComponentProps> = {
  args: {
    children: <InstagramIcon className='fill-gray group-hover:fill-white transition' />
  }
}

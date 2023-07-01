import type { StoryObj, Meta } from '@storybook/react'
import { VideoModal, VideoModalComponentProps } from '../../components'

export default {
  title: 'Modals/VideoModal',
  component: VideoModal,
  args: {handleModal: () => {true},
    isOpen: true,
    videoInfos: {
      title: 'Modal title',
      description: 'Descrição do modal',
      url: 'https://www.youtube.com/watch?v=gK8uPCkka7c',
      isWebnar: true,
    }},
  argTypes: {
    isOpen: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
    videoInfos: {
      control: {
        type: 'text'
      }
    },
  },

} as Meta<VideoModalComponentProps>

export const Modal: StoryObj<VideoModalComponentProps> = {}

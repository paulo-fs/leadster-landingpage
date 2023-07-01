import type { StoryObj, Meta } from '@storybook/react'
import { ButtonDownload, ButtonDownloadComponentProps } from '../../components'

export default {
  title: 'Buttons/DownloadButton',
  component: ButtonDownload,
  args: {
    type: 'Spreadsheet.xls'
  },
  argTypes: {
    type: {
      defaultValue: 'Spreadsheet.xls',
      control: {
        type: 'radio'
      }
    }
  }
} as Meta<ButtonDownloadComponentProps>

export const Button: StoryObj<ButtonDownloadComponentProps> = {}

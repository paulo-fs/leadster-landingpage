export interface IVideoData {
  id: string
  title: string
  url: string
  topic: Topics
  date: string
}

export enum Topics {
  CHATBOT = 'chatBot',
  LEADS = 'leads',
  AGENCY = 'agency',
  PAIDMEDIA = 'paidMedia',
  DIGITALMARKETING = 'digitalMarketing',
  ALL = 'all',
}

export enum OrderBy {
  DATE = 'date',
  TITLE = 'title'
}

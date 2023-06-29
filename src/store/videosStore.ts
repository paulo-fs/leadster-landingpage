import { IVideoData, OrderBy, Topics } from '@/dataTypes/videos.dto'
import { sortVideos } from '@/helpers/sortVideos'
import { create } from 'zustand'

interface VideoStoreProps {
  orderBy: OrderBy
  selectedTopic: Topics
  filteredVideos: IVideoData[] | null
  allVideos: IVideoData[] | null
  videoInfos: IVideoInfos

  page: number
  videosPerPage: number

  setVideos: (videos: IVideoData[]) => void
  setTopic: (topic: Topics) => void
  setVideoInfos: (data: IVideoInfos) => void

  setPage: (page: number) => void
  changeOrder: (order: OrderBy) => void
}

export interface IVideoInfos {
  url: string
  title: string
  description: string | null
  isWebnar: boolean
}

const initialState = {
  orderBy: OrderBy.DATE,
  selectedTopic: Topics.ALL,
  filteredVideos: null,
  allVideos: null,
  videoInfos: {
    url: '',
    title: '',
    description: null,
    isWebnar: false
  },

  page: 1,
  videosPerPage: 9,
}

export const useVideoStore = create<VideoStoreProps>((set, get) => ({
  ...initialState,

  setVideos: (videos: IVideoData[]) => {
    const {orderBy} = get()
    const orderedBy = sortVideos(videos, orderBy)
    set({ allVideos: orderedBy })
  },

  setTopic: (topic: Topics) => {
    const {allVideos} = get()
    if (topic === Topics.ALL) {
      set({ selectedTopic: topic, page: 1 })
      return set({ filteredVideos: null })
    }
    set({ selectedTopic: topic, page: 1 })
    const result = allVideos?.filter((video) => video.topic == topic)
    set({ filteredVideos: result })
  },

  setVideoInfos(data) {
    set({ videoInfos: data })
  },

  setPage: (page) => {
    set({ page: page })
  },

  changeOrder: (order) => {
    const {filteredVideos, orderBy, allVideos} = get()
    set({ orderBy: order })
    const orderedBy = sortVideos(filteredVideos || allVideos, orderBy)
    set({ filteredVideos: orderedBy})
  }
}))

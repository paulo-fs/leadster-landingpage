import { IVideoData, Topics } from '@/dataTypes/videos.dto'
import { create } from 'zustand'

interface VideoStoreProps {
  orderBy: string
  selectedTopic: Topics
  filteredVideos: IVideoData[] | null

  selectTopic: (topic: Topics, videos: IVideoData[]) => void
}

const initialState = {
  orderBy: 'date',
  selectedTopic: Topics.ALL,
  filteredVideos: null,
}

export const useVideoStore = create<VideoStoreProps>((set, get) => ({
  ...initialState,

  selectTopic: (topic: Topics, videos: IVideoData[]) => {
    set({ selectedTopic: topic })
    const result = videos.filter((video) => video.topic === topic)
    set({ filteredVideos: result })
  },
}))

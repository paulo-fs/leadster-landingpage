import { IVideoData, Topics } from '@/dataTypes/videos.dto'
import { create } from 'zustand'

interface VideoStoreProps {
  orderBy: string
  selectedTopic: Topics
  filteredVideos: IVideoData[] | null
  allVideos: IVideoData[] | null

  setVideos: (videos: IVideoData[]) => void
  setTopic: (topic: Topics) => void
}

const initialState = {
  orderBy: 'date',
  selectedTopic: Topics.ALL,
  filteredVideos: null,
  allVideos: null
}

export const useVideoStore = create<VideoStoreProps>((set, get) => ({
  ...initialState,

  setVideos: (videos: IVideoData[]) => {
    set({ allVideos: videos })
  },

  setTopic: (topic: Topics) => {
    const {allVideos} = get()
    if (topic === Topics.ALL) {
      set({ selectedTopic: topic })
      return set({ filteredVideos: null })
    }
    set({ selectedTopic: topic })
    const result = allVideos?.filter((video) => video.topic === topic)
    set({ filteredVideos: result })
  },
}))

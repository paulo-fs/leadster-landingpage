import { getVideos } from "@/services"
import { useVideoStore } from "@/store/videosStore"
import { useEffect } from "react"

export function videosController() {
  const {filteredVideos, setTopic, selectedTopic, setVideos, allVideos} = useVideoStore()

  async function getData() {
    const { videos } = await getVideos()
    setVideos(videos)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    allVideos,
    filteredVideos,
    setTopic,
    selectedTopic
  }
}

import { IVideoData } from '@/dataTypes/videos.dto'
import { axiosApi } from '@/libs/axios'

export async function getVideos(): Promise<{ videos: IVideoData[] }> {
  const { data } = await axiosApi.get('/api/videos')

  return {
    videos: data?.videos,
  }
}

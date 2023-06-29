import { IVideoData, OrderBy } from '@/dataTypes/videos.dto'

export function sortVideos(data: IVideoData[] | null, sortBy: OrderBy): IVideoData[] | undefined {
  if (sortBy === OrderBy.DATE) {
    return data?.sort((a, b) =>  new Date(a.date).getTime() - new Date(b.date).getTime())
  }
  return data?.sort((a, b) => {
    if (a.title[0] > b.title[0]) return 1
    if (a.title[0] < b.title[0]) return -1
    return 0
  })
}

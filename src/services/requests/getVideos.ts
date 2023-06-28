interface IVideoData {
  id: string
  title: string
  url: string
  topic: 'chatBot' | 'leads' | 'agency' | 'paidMedia' | 'digitalMarketing'
  date: string
}

export async function getVideos(): Promise<{ videos: IVideoData[] }> {
  const { data } = await fetch('http://localhost:3000/api/videos').then(
    (response) => response.json()
  )
  return { videos: data.videos }
}

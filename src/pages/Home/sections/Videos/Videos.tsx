import { CardVideo } from '@/components'
import { Navigation } from './Navigation/Navigation'
import { Pagination } from './Pagination/Pagination'
import { getVideos } from '@/services'
import { useEffect } from 'react'

export function VideosSection() {
  const videosx = [{
    id: '1',
    title: 'teste',
  }]

  async function getData() {
    const { videos } = await getVideos()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className='w-full bg-white max-w-6xl mx-auto pt-24 pb-20'>
      <Navigation />

      <div className='border-y border-gray border-opacity-70 py-16 my-10'>
        <div className='grid grid-cols-3 gap-8'>
          {videosx && videosx.map((item) => {
            return (
              <CardVideo key={item.id} title={item.title} />
            )
          })}
        </div>
      </div>

      <div className='w-full grid place-content-center'>
        <Pagination />
      </div>
    </section>
  )
}

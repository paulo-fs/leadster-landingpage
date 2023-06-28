import { CardVideo } from '@/components'
import { Navigation } from './Navigation/Navigation'
import { Pagination } from './Pagination/Pagination'
import { videosController } from './Videos.controller'

export function VideosSection() {
  const { allVideos, filteredVideos, setTopic, selectedTopic } = videosController()

  return (
    <section className='w-full bg-white max-w-6xl mx-auto pt-24 pb-20'>
      <Navigation
        setTopic={setTopic}
        selectedTopic={selectedTopic}
      />

      <div className='border-y border-gray border-opacity-70 py-16 my-10'>
        <div className='grid grid-cols-3 gap-8'>
          {allVideos && (filteredVideos || allVideos).map((item) => {
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

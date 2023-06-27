import { CardVideo } from '@/components'
import { Navigation } from './Navigation/Navigation'
import { Pagination } from './Pagination/Pagination'

export function VideosSection() {
  const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  return (
    <section className='w-full max-w-6xl mx-auto pt-24 pb-20'>
      <Navigation />

      <div className='border-y border-gray border-opacity-70 py-16 my-10'>
        <div className='grid grid-cols-3 gap-8'>
          {amount.map((item) => {
            return (
              <CardVideo key={item} />
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

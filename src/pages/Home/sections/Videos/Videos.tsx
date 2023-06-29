import { CardVideo, VideoModal } from '@/components'
import { Navigation } from './Navigation/Navigation'
import { Pagination } from './Pagination/Pagination'
import { videosController } from './Videos.controller'
import { Topics } from '@/dataTypes/videos.dto'

export function VideosSection() {
  const {
    allVideos,
    filteredVideos,
    setTopic,
    selectedTopic,
    isOpenModal,
    handleModal,
    videoInfos,
    handleSetVideoModalInfos,
    pagesCount,
    videosPerPage,
    page,
    setPage,
  } = videosController()

  return (
    <section className='w-full bg-white max-w-6xl mx-auto pt-24 pb-20'>
      <Navigation
        setTopic={setTopic}
        selectedTopic={selectedTopic}
      />

      {isOpenModal && <VideoModal videoInfos={videoInfos} isOpen={isOpenModal} handleModal={handleModal} />}

      <div className='border-y border-gray border-opacity-70 py-16 my-10'>
        <div className='grid grid-cols-3 gap-8'>
          {allVideos && (filteredVideos || allVideos)
            .slice((page - 1) * videosPerPage, (page - 1) * videosPerPage + videosPerPage)
            .map((item) => {
              return (
                <CardVideo key={item.id} title={item.title}
                  onClick={() => handleSetVideoModalInfos({
                    title: item.title,
                    description: null,
                    isWebnar: item.topic === Topics.DIGITALMARKETING || item.topic === Topics.LEADS,
                    url: item.url
                  })}
                />
              )
            })}
        </div>
      </div>

      <div className='w-full grid place-content-center'>
        <Pagination
          count={pagesCount}
          changePage={setPage}
          activePage={page}
        />
      </div>
    </section>
  )
}

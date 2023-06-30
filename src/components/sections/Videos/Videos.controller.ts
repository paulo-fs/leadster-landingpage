import { getVideos } from '@/services'
import { IVideoInfos, useVideoStore } from '@/store/videosStore'
import { useEffect, useState } from 'react'

export function videosController() {
  const {
    filteredVideos,
    setTopic,
    selectedTopic,
    setVideos,
    allVideos,
    videoInfos,
    setVideoInfos,
    page,
    setPage,
    videosPerPage
  } = useVideoStore()

  const [isOpenModal, setIsOpenModal] = useState(false)

  const calcPagesCount = Math.floor((filteredVideos?.length || allVideos?.length || 1) / videosPerPage)
  const pagesCount = calcPagesCount === 0 ? 1 : calcPagesCount

  function handleModal() {
    setIsOpenModal(!isOpenModal)
  }

  async function getData() {
    const { videos } = await getVideos()
    setVideos(videos)
  }

  function handleSetVideoModalInfos(data: IVideoInfos){
    setVideoInfos(data)
    setIsOpenModal(true)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
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
  }
}

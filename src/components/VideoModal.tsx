import React, { ComponentProps, Dispatch, ElementType, SetStateAction, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Dialog } from '@headlessui/react'
import ReactPlayer from 'react-player/lazy'
import { Player } from '@lottiefiles/react-lottie-player'
import { X } from 'phosphor-react'
import { ButtonDownload } from '@/components'
import loadingAnimation from '@/assets/Loading-2.json'

import { Plus_Jakarta_Sans } from 'next/font/google'
import { IVideoInfos } from '@/store/videosStore'

export const jackarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

interface VideoModalProps {
  handleModal: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  videoInfos: IVideoInfos
}
export function VideoModal({ handleModal, isOpen, videoInfos }: VideoModalProps) {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => setMounted(true), [])

  const modalContent = (
    <Dialog open={isOpen} onClose={handleModal} className={`relative z-10 ${jackarta.className}`}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />


      <div className="fixed overflow-y-auto overflow-x-hidden inset-0 flex items-center justify-center z-50">
        <Dialog.Panel  className="mx-auto w-full max-w-xl h-full sm:h-auto sm:rounded-2xl bg-white">

          <div className='absolute w-full max-w-xl group'>
            <button  className='absolute top-4 right-5 rounded-full p-2 bg-white group-hover:bg-blue-buttonMedium transition'
              onClick={() => handleModal(false)}
            >
              <X size={24}  />
            </button>
          </div>

          <Dialog.Title className='py-4 sm:py-9 px-4 w-10/12 sm:w-auto sm:px-20 text-sm sm:text-lg font-medium'>
            <span className="text-blue-main">{videoInfos.isWebnar && 'Webinar:'} </span>
            {videoInfos.title}
          </Dialog.Title>


          <div className="w-full relative z-50">
            <ReactPlayer
              url={videoInfos.url}
              width='100%'
              controls
              stopOnUnmount
              onReady={() => setIsLoading(false)}
            />
            {isLoading && (
              <div className="fixed top-24 left-6 sm:inset-64">
                <Player
                  autoplay
                  loop
                  style={{ width: '300px', height: '300px' }}
                  src={loadingAnimation}
                />
              </div>
            )}
          </div>

          <div className="px-4 sm:px-6 py-4 sm:py-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-sm sm:text-base w-full border-b border-gray border-opacity-50 pb-2">Descrição</h3>
              <Dialog.Description className='text-sm sm:text-base'>
                Lorem ipsum dolor sit amet, consectetur adiping elit. Morbi eu cursus massa. Etiam efficitur est at dolor et sollicitudin ullamcorper at et enim. Suspendisse eleifend metus ultrices iacullis aliquam.
              </Dialog.Description>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <h3 className="font-semibold text-sm sm:text-base w-full border-b border-gray border-opacity-50 pb-2">
                Downloads
              </h3>
              <div className='hidden md:flex flex-wrap gap-2'>
                <ButtonDownload type='Spreadsheet.xls' />
                <ButtonDownload type='Document.doc' />
                <ButtonDownload type='Presentation.ppt' />
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-wrap sm:fixed bottom-0 left-0 bg-white p-6 sm:flex-row md:flex-col gap-3">
            <ButtonDownload type='Spreadsheet.xls' />
            <ButtonDownload type='Document.doc' />
            <ButtonDownload type='Presentation.ppt' />
            <ButtonDownload type='Folder.zip' />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )

  return mounted ? createPortal(modalContent, document.body) : null
}

export interface VideoModalComponentProps extends ComponentProps<typeof VideoModal> {
  as?: ElementType
}

VideoModal.displayName = 'CardVideo'

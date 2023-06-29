import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Dialog } from '@headlessui/react'
import ReactPlayer from 'react-player/lazy'
import { ButtonDownload } from "../ButtonDownload/ButtonDownload";

import { Plus_Jakarta_Sans } from "next/font/google";
import { IVideoInfos } from "@/store/videosStore";

export const jackarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

interface VideoModalProps {
  handleModal: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  videoInfos: IVideoInfos
}
export function VideoModal({ handleModal, isOpen, videoInfos }: VideoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const modalContent = (
    <Dialog open={isOpen} onClose={handleModal} className={`relative z-50 ${jackarta.className}`}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel  className="mx-auto max-w-xl rounded-2xl bg-white">
          <Dialog.Title className='py-9 px-20 text-lg font-medium'>
            <span className="text-blue-main">{videoInfos.isWebnar && 'Webinar:'} </span>
            {videoInfos.title}
          </Dialog.Title>

          <div className="w-full">
            <ReactPlayer
              url={videoInfos.url}
              width='100%'
              controls
              stopOnUnmount
            />
          </div>

          <div className="px-6 py-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold w-full border-b border-gray border-opacity-50 pb-2">Descrição</h3>
              <Dialog.Description className=''>
                Lorem ipsum dolor sit amet, consectetur adiping elit. Morbi eu cursus massa. Etiam efficitur est at dolor et sollicitudin ullamcorper at et enim. Suspendisse eleifend metus ultrices iacullis aliquam.
              </Dialog.Description>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <h3 className="font-semibold w-full border-b border-gray border-opacity-50 pb-2">
                Downloads
              </h3>
              <div className='flex gap-2'>
                <ButtonDownload type='Spreadsheet.xls' />
                <ButtonDownload type='Document.doc' />
                <ButtonDownload type='Presentation.ppt' />
              </div>
            </div>
          </div>
        </Dialog.Panel>

        <Dialog.Panel className="fixed bottom-0 left-0 bg-white p-6 flex flex-col gap-3">
          <ButtonDownload type='Spreadsheet.xls' />
          <ButtonDownload type='Document.doc' />
          <ButtonDownload type='Presentation.ppt' />
          <ButtonDownload type='Folder.zip' />
        </Dialog.Panel>
      </div>
    </Dialog>
  )

  return mounted ? createPortal(modalContent, document.body) : null
}

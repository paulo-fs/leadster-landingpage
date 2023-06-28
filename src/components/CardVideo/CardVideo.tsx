import Image from 'next/image'
import videoThumbnail from '@/assets/thumbnail.png'
import playIcon from '@/assets/playIcon.svg'

interface CardVideoProps {
  title: string
}

export function CardVideo(props: CardVideoProps){
  const { title } = props

  return (
    <div className='max-w-card rounded-3xl shadow-2xl group flex flex-col'>
      <div className='w-full h-full rounded-t-3xl group-hover:bg-blue-main transition relative'>
        <Image data-img='bg' src={videoThumbnail} className='rounded-t-3xl group-hover:opacity-70 transition' alt='' />
        <Image data-img='icon' src={playIcon} alt='' className='absolute top-20 right-36 opacity-0 group-hover:opacity-100 transition' />
      </div>


      <h6 className='py-6 px-8 text-base font-bold text-black group-hover:text-blue-main transition'>
        {title}
      </h6>
    </div>
  )
}

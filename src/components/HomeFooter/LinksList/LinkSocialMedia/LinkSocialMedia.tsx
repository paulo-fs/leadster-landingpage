import Link from 'next/link'

import { InstagramIcon } from './Icons/Instagram'
import { FacebookIcon } from './Icons/Facebook'
import { LinkedInIcon } from './Icons/LinkedIn'

export function LinkSocialMedia() {

  return (
    <div>
      <h6 className='text-black font-bold'>
        Siga a Leadster
      </h6>

      <div className='mt-8 flex gap-4'>
        <Link href='https://www.linkedin.com/company/leadster-platform/'
          target='_blank'
          className='p-4 rounded-full bg-gray bg-opacity-20 hover:bg-blue-main group transition'
        >
          <LinkedInIcon className='fill-gray group-hover:fill-white transition' />
        </Link>
        <Link href='https://www.facebook.com/leadsterplatform'
          target='_blank'
          className='p-4 rounded-full bg-gray bg-opacity-20 hover:bg-blue-main group transition'
        >
          <FacebookIcon className='fill-gray group-hover:fill-white transition' />
        </Link>
        <Link href='https://www.instagram.com/leadster.com.br/'
          target='_blank'
          className='p-4 rounded-full bg-gray bg-opacity-20 hover:bg-blue-main group transition'
        >
          <InstagramIcon className='fill-gray group-hover:fill-white transition' />
        </Link>
      </div>

      <ul className='mt-6 flex flex-col gap-5'>
        <li className='text-gray text-sm'>
          <Link href='/'>
            E-mail: contato@leadster.com.br
          </Link>
        </li>
        <li className='text-gray text-sm'>
          <Link href='/'>
            Telefone: (42) 98828-9851
          </Link>
        </li>
      </ul>
    </div>
  )
}

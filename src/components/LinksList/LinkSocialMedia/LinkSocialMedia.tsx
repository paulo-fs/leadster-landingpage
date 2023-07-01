import Link from 'next/link'

import { ButtonRounded } from '@/components/ButtonRounded'
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
        <ButtonRounded
          url='https://www.linkedin.com/company/leadster-platform/'
        >
          <LinkedInIcon className='fill-gray group-hover:fill-white transition' />
        </ButtonRounded>
        <ButtonRounded
          url='https://www.facebook.com/leadsterplatform'
        >
          <FacebookIcon className='fill-gray group-hover:fill-white transition' />
        </ButtonRounded>
        <ButtonRounded
          url='https://www.instagram.com/leadster.com.br/'
        >
          <InstagramIcon className='fill-gray group-hover:fill-white transition' />
        </ButtonRounded>
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


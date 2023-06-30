import { LinksList } from './LinksList/LinksList'
import { LinkSocialMedia } from './LinksList/LinkSocialMedia/LinkSocialMedia'

import {mainLinks, casesLinks, materialsLinks} from './LinksList/listsOfLinks'
import Image from 'next/image'
import animatedLogo from '@/assets/leadster_270.gif'

export function HomeFooter() {
  return (
    <footer className='w-full pt-6 md:pt-12 bg-white'>
      <div className="max-w-6xl mx-auto">

        <div className='flex flex-col gap-2 items-center'>
          <Image src={animatedLogo} alt='Logo Leadster' className='w-40 md:w-auto' />
          <p className='text-gray text-xs'>
            Transformando visitantes em clientes.
          </p>
        </div>

        <div className='flex flex-wrap gap-2 md:gap-0 px-4 lg:px-0 mx-0 sm:mx-auto items-start justify-between mt-6 md:mt-12'>
          <LinksList title='Links Principais' list={mainLinks} />
          <LinksList title='Cases' list={casesLinks} />
          <LinksList title='Materiais' list={materialsLinks} />
          <LinkSocialMedia />
        </div>
      </div>

      <div
        className="w-full border-y border-gray border-opacity-20 py-4 md:py-9 mt-6 lg:mt-18"
      >
        <div className="flex flex-wrap gap-4 items-center text-center lg:text-right justify-between w-full max-w-6xl mx-0 px-4 lg:px-0 xl:mx-auto">
          <p className="text-gray text-sm">
            Copyright &copy; 2015 - 2022 Todos os direitos reservados | <span className="text-blue-main">Leadster</span>
          </p>

          <p className="text-gray text-sm">
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
          </p>
        </div>
      </div>
    </footer>
  )
}

import { LinksList } from './LinksList/LinksList'

import {mainLinks, casesLinks, materialsLinks} from './LinksList/listsOfLinks'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { LinkSocialMedia } from './LinksList/LinkSocialMedia/LinkSocialMedia'

export function HomeFooter() {
  return (
    <footer className='w-full pt-12 bg-white'>
      <div className="max-w-6xl mx-auto">

        <div className='flex flex-col gap-2 items-center'>
          <Image src={logo} alt='Logo Leadster' />
          <p className='text-gray text-xs'>
            Transformando visitantes em clientes.
          </p>
        </div>

        <div className='flex items-start justify-between mt-12'>
          <LinksList title='Links Principais' list={mainLinks} />
          <LinksList title='Cases' list={casesLinks} />
          <LinksList title='Materiais' list={materialsLinks} />
          <LinkSocialMedia />
        </div>
      </div>

      <div
        className="border-y border-gray border-opacity-20 py-9 mt-18"
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
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

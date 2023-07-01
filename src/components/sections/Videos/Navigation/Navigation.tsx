import { Button, SelectBox } from '@/components'
import { Topics } from '@/dataTypes/videos.dto'

interface NavigationProps {
  selectedTopic: Topics,
  setTopic: (topic: Topics) => void
}

export function Navigation({ setTopic, selectedTopic }: NavigationProps) {

  return (
    <div className='flex flex-wrap gap-4 items-center justify-center sm:justify-between'>
      <nav className='flex flex-wrap gap-2 md:gap-4 justify-center'>
        <Button
          id={Topics.AGENCY}
          isActive={selectedTopic === Topics.AGENCY}
          onClick={() => setTopic(Topics.AGENCY)}
        >
          Agências
        </Button>
        <Button
          id={Topics.CHATBOT}
          isActive={selectedTopic === Topics.CHATBOT}
          onClick={() => setTopic(Topics.CHATBOT)}
        >
          Chatbot
        </Button>
        <Button
          id={Topics.DIGITALMARKETING}
          isActive={selectedTopic === Topics.DIGITALMARKETING}
          onClick={() => setTopic(Topics.DIGITALMARKETING)}
        >
          Marketing Digital
        </Button>
        <Button
          id={Topics.LEADS}
          isActive={selectedTopic === Topics.LEADS}
          onClick={() => setTopic(Topics.LEADS)}
        >
          Geração de leads
        </Button>
        <Button
          id={Topics.PAIDMEDIA}
          isActive={selectedTopic === Topics.PAIDMEDIA}
          onClick={() => setTopic(Topics.PAIDMEDIA)}
        >
          Mídia paga
        </Button>
        <Button
          id={Topics.ALL}
          isActive={selectedTopic === Topics.ALL}
          onClick={() => setTopic(Topics.ALL)}
        >
          Todos
        </Button>
      </nav>

      <div className='flex gap-4 items-center'>
        <span>Ordenar por:</span>
        <SelectBox />
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CaretDown } from 'phosphor-react'
import { useVideoStore } from '@/store/videosStore'
import { OrderBy } from '@/dataTypes/videos.dto'

const options = [
  { id: OrderBy.DATE, name: 'Data de Publicação' },
  { id: OrderBy.TITLE, name: 'Ordem Alfabética' },
]

export function SelectBox() {
  const [selectedOrder, setSelectedOrder] = useState(options[0])
  const {changeOrder} = useVideoStore()

  function handleOrder(selected: typeof options[0]) {
    setSelectedOrder(selected)
    changeOrder(selected.id)
  }

  return (
    <div className='relative px-4 py-2 border rounded-lg border-black'>
      <Listbox value={selectedOrder} onChange={handleOrder}>

        <Listbox.Button className='w-44 flex gap-2 items-center justify-between'>
          {selectedOrder.name}
          <CaretDown size={20} weight='bold' />
        </Listbox.Button>

        <div className='absolute left-0 top-11 z-50 w-full'>
          <Listbox.Options className='ui-not-active:bg-blue-background rounded-lg'>
            {options.map((person) => (
              <Listbox.Option
                key={person.id}
                value={person}
                className="ui-active:bg-blue-main ui-active:text-white ui-not-active:text-black p-3 rounded-lg"
              >
                {person.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

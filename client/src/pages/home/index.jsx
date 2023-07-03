import EisenBlock from '@/components/EisenBlock'
import ListView from '@/components/ListView'
import TrashBlock from '@/components/TrashBlock'
import ToasterProvider from '@/context/ToasterProvider'
import StreakModal from '@/components/StreakModal'
import { TodoListContext } from '@/context/TodoListContext'
import { useEffect, useState } from 'react'
import './Home.css'

export default function Home() {
  const [view, setView] = useState('List')
  const [maxWeight, setMaxWeight] = useState(10)
  const [tasks, setTasks] = useState([
    { name: 'Task 1', weight: 0, status: 'incomplete' },
    { name: 'Task 2', weight: 0, status: 'incomplete' },
    { name: 'Task 3', weight: 0, status: 'incomplete' }
  ])

  useEffect(() => {
    const totalWeight = tasks.reduce((acc, task) => acc + task.weight, 0)
    setMaxWeight(10 - totalWeight)
  }, [tasks])

  const changeView = () => {
    if (view == 'List') setView('Eisenhower')
    else setView('List')
  }

  return (
    <TodoListContext.Provider value={{ view, maxWeight }}>
      <ToasterProvider />

      <div className='text-center bg-transparent w-full h-auto m-auto'>
        <div className='flex mb-4 items-center justify-start'>
          <img src="../../../public/logo/tododay-green.png" alt="tododay" className="w-[25%] h-auto filter-logo-white"/>
          <button onClick={changeView} className='p-4 text-[#444444] bg-white rounded-2xl w-[151px] h-[64px]'>{view} View</button>
        </div>

        {view == 'List' && (
          <div className='m-auto h-[556px] w-[1086px]'>
            <ListView tasks={tasks} setTasks={setTasks} maxWeight={maxWeight} />
          </div>
        )}
        {view == 'Eisenhower' && (
          <>
            <div className='flex'>
              <div className='flex w-[30px]'></div>
              <div className='text-white text-lg font-bold flex flex-1 items-center justify-center'>Urgent</div>
              <div className='text-white text-lg font-bold flex flex-1 items-center justify-center'>Not Urgent</div>
            </div>
            <div className='flex'>
              <div className='w-[30px] text-white text-lg font-bold flex items-center justify-center -rotate-90'>
                Important
              </div>
              <EisenBlock color={'green'} bcolor={'green'} name={'Todo now'} />
              <EisenBlock color={'blue'} bcolor={'blue'} name={'Planning'} />
            </div>
            <div className='flex'>
              <div className='w-[30px] whitespace-nowrap text-white text-lg font-bold flex items-center justify-center -rotate-90 width-auto'>
                Not Important
              </div>
              <EisenBlock color={'red'} bcolor={'red'} name={'Someone can do it for me'} />
              <TrashBlock />
            </div>
          </>
        )}

        <StreakModal />
      </div>
    </TodoListContext.Provider>
  )
}

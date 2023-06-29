import { useEffect, useState } from 'react'
import './App.css'
import mongoLogo from './assets/mongodb.svg'
import nodeLogo from './assets/nodejs.svg'
import reactLogo from './assets/react.svg'
import Profile from './components/Profile'
import StreakModal from './components/StreakModal'
import TaskWeight from './components/TaskWeight'
import { handleGetUsersAPI } from './services/user'
import viteLogo from '/vite.svg'

const logos = [
  {
    name: 'vite',
    image: viteLogo,
    link: 'https://vitejs.dev'
  },
  {
    name: 'react',
    image: reactLogo,
    link: 'https://react.dev'
  },
  {
    name: 'nodejs',
    image: nodeLogo,
    link: 'https://nodejs.dev/en/'
  },
  {
    name: 'mongodb',
    image: mongoLogo,
    link: 'https://www.mongodb.com'
  }
]

function App() {
  const [users, setUsers] = useState([])
  const [maxWeight, setMaxWeight] = useState(100)
  const [tasks, setTasks] = useState([
    { name: "Task 1", weight: 0 },
    { name: "Task 2", weight: 0 },
    { name: "Task 3", weight: 0 }
  ])

  useEffect(() => {
    handleGetUsersAPI()
      .then((res) => res.data?.users)
      .then((users) => {
        setUsers(users)
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    const totalWeight = tasks.reduce((acc, task) => acc + task.weight, 0)
    setMaxWeight(100 - totalWeight)
  }, [tasks])

  return (
    <>
      <h1 className='italic'>
        Hello{' '}
        <span className='text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          TodoDay!
        </span>
      </h1>

      <div className='flex gap-1 justify-center p-8'>
        {logos.map((logo, index) => {
          return (
            <a href={logo.link} target='_blank' rel='noreferrer' key={index}>
              <img src={logo.image} className={`logo ${logo.name}`} alt={logo.name} />
            </a>
          )
        })}
      </div>

      <div className='flex gap-2 my-10'>
        {users.length &&
          users.map((profile, index) => {
            return <Profile key={index} index={index} profile={profile} />
          })}
      </div>

      <div className='flex flex-col my-10'>
        <p>Task weight = Importance * Expected time cost</p>
      </div>

      <div className='flex flex-col gap-2'>
        {tasks.map((task, index) => (
          <div key={index} className='flex items-center gap-2'>
            <span className='w-32'>{task.name}</span>
            <TaskWeight
              weight={task.weight || 0}
              setWeight={(newWeight) => {
                const tasksCopy = [...tasks]
                tasksCopy[index].weight = newWeight
                setTasks(tasksCopy)
              }}
              maxWeight={maxWeight}
            />
          </div>
        ))}
      </div>

      <StreakModal />
    </>
  )
}

export default App

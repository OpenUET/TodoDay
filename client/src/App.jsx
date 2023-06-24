import { useEffect, useState } from 'react'
import mongoLogo from './assets/mongodb.svg'
import nodeLogo from './assets/nodejs.svg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './components/Profile'
import { handleGetUsersAPI } from './services/user'

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

  useEffect(() => {
    console.log(import.meta.env.VITE_API_BASE_URL)
    handleGetUsersAPI()
      .then((res) => res.data?.users)
      .then((users) => {
        setUsers(users)
      })
      .catch(console.error)
  }, [])

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
            return <Avatar key={index} index={index} profile={profile} />
          })}
      </div>
    </>
  )
}

export default App

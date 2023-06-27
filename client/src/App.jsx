import { useEffect, useState } from 'react'
import './App.css'
import { handleGetUsersAPI } from './services/user'
import EisenBlock from './components/EisenBlock'
import TrashBlock from './components/TrashBlock'

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
    <div className="flex flex-col bg-transparent w-full h-auto">
      <div className="text-black m-8 flex items-center justify-center">Tododay</div>
      <div className="flex">
        <EisenBlock color={"58cc02"} bcolor={"58a700"} name={"Todo now"}/>
        <EisenBlock color={"1cb0f6"} bcolor={"1899d6"} name={"Planning"}/>
      </div>
      <div className="flex">
        <EisenBlock color={"ff4b4b"} bcolor={"f81c1c"} name={"Someone can do it for me"}/>
        <TrashBlock/>
      </div>
    </div>
  )
}

export default App

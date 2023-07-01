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
      <div className="text-white m-8 flex items-center justify-center">Tododay</div>
      <div className="flex">
        <div className="flex w-[30px]"></div>
        <div className="text-white text-lg font-bold flex flex-1 items-center justify-center">Urgent</div>
        <div className="text-white text-lg font-bold flex flex-1 items-center justify-center">Not Urgent</div>
      </div>
      <div className="flex">
        <div className="w-[30px] text-white text-lg font-bold flex items-center justify-center -rotate-90">Important</div>
        <EisenBlock color={"green"} bcolor={"green"} name={"Todo now"}/>
        <EisenBlock color={"blue"} bcolor={"blue"} name={"Planning"}/>
      </div>
      <div className="flex">
        <div className="w-[30px] whitespace-nowrap text-white text-lg font-bold flex items-center justify-center -rotate-90 width-auto">Not Important</div>
        <EisenBlock color={"red"} bcolor={"red"} name={"Someone can do it for me"}/>
        <TrashBlock/>
      </div>
    </div>
  )
}

export default App

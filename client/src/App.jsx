import { useEffect, useState } from 'react'
import './App.css'
import { handleGetUsersAPI } from './services/user'
import CreateTask from './components/CreateTask'

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
    <div>
      <CreateTask />
    </div>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import './App.css'
import mongoLogo from './assets/mongodb.svg'
import nodeLogo from './assets/nodejs.svg'
import reactLogo from './assets/react.svg'
import Profile from './components/Profile'
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
  const title = useRef();
  const description = useRef();
  const priority = useRef(0);
  const [status,setStatus] = useState(false);
  const [tasks, setTasks] = useState([
    { name: "Task 1", weight: 0 },
    { name: "Task 2", weight: 0 },
    { name: "Task 3", weight: 0 }
  ])

  useEffect(() => {
    console.log(import.meta.env.VITE_API_BASE_URL)
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

  const handleSubmit = async (e) =>{
    e.preventDefault()
    let todo = { title: title.current.value, description: description.current.value, status: status,priority: parseInt(priority.current.value)}
    createNewTask(todo);

    console.log(todo)

  }
  const createNewTask = async(todo) =>{
    try{
        const a = await fetch('http://localhost:5000/api/todo', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(todo)
        })
        console.log(a)
    }catch(error){
        console.log(error)
    }
}
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
      <form className='mb-20'>
        <div className="flex items-center">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={title} placeholder="enter here"/>
        </div>
        <div className="flex items-center">
            <label htmlFor="des">Description</label>
            <input type="text" id="des" ref={description} placeholder="enter here"/>
        </div>
        <div className="flex items-center">
            <label htmlFor="priority">Priority</label>
            <input type="number" id="prio" ref={priority} placeholder="enter here"/>
        </div>
        <div className="flex items-center">
            <p htmlFor="status">Status:</p>
            <label htmlFor="done">done</label>
            <input id="done" name="status" checked={status === true} type="radio" onChange={() => setStatus(true)}/>
            <label htmlFor="todo">todo</label>
            <input id="todo" name="status" checked={status === false} type="radio" onChange={() => setStatus(false)} />
        </div>
        <button onClick={handleSubmit} id="submit">Submit</button>
    </form>
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
    </>
  )
}

export default App

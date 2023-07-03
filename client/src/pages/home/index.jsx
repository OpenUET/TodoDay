import EisenBlock from '@/components/EisenBlock'
import ListView from '@/components/ListView'
import StreakModal from '@/components/StreakModal'
import TrashBlock from '@/components/TrashBlock'
import ToasterProvider from '@/context/ToasterProvider'
import { TodoListContext } from '@/context/TodoListContext'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import './Home.css'

export default function Home() {
  const [view, setView] = useState("List");
  const [maxWeight, setMaxWeight] = useState(10);
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    try {
      // Todo: fetch only task created today
      const data = await fetch('http://127.0.0.1:3333/api/v1/todo').then(res => res.json())
      console.log("fetch completed", data)
      setTasks(data.tasks)
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong, check console")
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    const totalWeight = tasks.reduce((acc, task) => acc + (task.newWeight || task.weight), 0)
    setMaxWeight(10 - totalWeight)
  }, [tasks])

  useEffect(() => {
    if (!maxWeight) onSyncTasks()
  }, [maxWeight])

  const onCreateTask = async ({ title, description }) => {
    const newTask = {
      title,
      description,
    }

    fetch('http://127.0.0.1:3333/api/v1/todo', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Task created")
        console.log(data.newTask)
        setTasks([...tasks, data.newTask])
      })
  }

  const onSyncTasks = async () => {
    const promises = tasks.map(task => {
      // Update tasks' weight
      if (task.newWeight && task.newWeight != task.weight)
        return fetch(`http://127.0.0.1:3333/api/v1/todo/${task._id}`, {
          headers: {
            'Content-type': 'application/json'
          },
          method: 'PUT',
          body: JSON.stringify({ weight: task.newWeight })
        }).then(res => res.json())
    })

    Promise.all(promises)
      .then(res => {
        const changed = res.some(r => !!r)
        if (changed) {
          fetchTasks()
          toast.success("Sync completed")
        }
      })
  }

  const onEditTask = async ({ _id, newTitle, newDescription, newStatus }) => {
    if (!_id || !newTitle && !newDescription && newStatus == undefined) return toast.success("Nothing changed")

    const oldTask = tasks.find(task => task._id == _id)
    let newTask = {
      title: newTitle || oldTask.title,
      description: newDescription || oldTask.description,
      status: newStatus != undefined ? newStatus : oldTask.status,
      weight: oldTask.weight,
    }

    const newTasks = tasks.map(task => task._id == _id ? { _id, ...newTask } : task);
    setTasks(newTasks)

    fetch(`http://127.0.0.1:3333/api/v1/todo/${_id}`, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Task updated")
      })
      .catch(err => {
        console.log(err)
        toast.error("Something went wrong, check console")
      })
  }

  const onDeleteTask = async ({ _id }) => {
    if (!_id) return toast.success("Nothing changed")
    setTasks(tasks.filter(task => task._id != _id))

    fetch(`http://127.0.0.1:3333/api/v1/todo/${_id}`, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'DELETE',
    }).then(res => res.json())
      .then(data => {
        toast.success("Task deleted")
      })
      .catch(err => {
        console.log(err)
        toast.error("Something went wrong, check console")
      })
  }

  const changeView = () => {
    if (view == "List") setView("Eisenhower Matrix");
    else setView("List");
  }

  return (
    <TodoListContext.Provider value={{ view, maxWeight, onCreateTask, onEditTask, onDeleteTask }} >
      <ToasterProvider />

      <div className='flex flex-col items-center text-center bg-transparent w-full h-auto m-auto'>
        <div className='w-full flex mb-4 items-center justify-start'>
          <img src="../../../public/logo/tododay-green.png" alt="tododay" className="w-[25%] h-auto filter-logo-white"/>
          <button onClick={changeView} className='p-4 text-[#444444] bg-white rounded-2xl w-[151px] h-[64px] flex justify-center items-center'>{view} View</button>
        </div>

        <div className="h-[556px] w-[85vw]">
          {view == "List" && (
            <ListView
              tasks={tasks}
              setTasks={setTasks}
              maxWeight={maxWeight}
            />
          )}
          {view == "Eisenhower Matrix" && (
            <>
              <div className="flex">
                <div className="flex w-[30px]"></div>
                <div className="text-white text-lg font-bold flex flex-1 items-center justify-center">Urgent</div>
                <div className="text-white text-lg font-bold flex flex-1 items-center justify-center">Not Urgent</div>
              </div>
              <div className="flex">
                <div className="w-[30px] text-white text-lg font-bold flex items-center justify-center -rotate-90">Important</div>
                <EisenBlock color={"green"} bcolor={"green"} name={"Todo now"} />
                <EisenBlock color={"blue"} bcolor={"blue"} name={"Planning"} />
              </div>
              <div className="flex">
                <div className="w-[30px] whitespace-nowrap text-white text-lg font-bold flex items-center justify-center -rotate-90 width-auto">Not Important</div>
                <EisenBlock color={"red"} bcolor={"red"} name={"Someone can do it for me"} />
                <TrashBlock />
              </div>
            </>
          )}
        </div>

        <StreakModal />
      </div>
    </TodoListContext.Provider>
  )
}

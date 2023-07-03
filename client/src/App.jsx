import { useEffect, useRef, useState } from 'react'
import './App.css'
import { handleGetUsersAPI } from './services/user'
import EisenBlock from './components/EisenBlock'
import TrashBlock from './components/TrashBlock'
import ListView from './components/ListView'
import ToasterProvider from './context/ToasterProvider'
import { TodoListContext } from './context/TodoListContext'

function App() {
  const [view, setView] = useState("List");
  const [maxWeight, setMaxWeight] = useState(10);
  const [tasks, setTasks] = useState([
    { name: "Task 1", weight: 0, status: "incomplete" },
    { name: "Task 2", weight: 0, status: "incomplete" },
    { name: "Task 3", weight: 0, status: "incomplete" }
  ])

  useEffect(() => {
    const totalWeight = tasks.reduce((acc, task) => acc + task.weight, 0)
    setMaxWeight(10 - totalWeight)
  }, [tasks])

  const changeView = () => {
    if (view == "List") setView("Eisenhower");
    else setView("List");
  }

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
    <TodoListContext.Provider value={{ view, maxWeight }} >
      <ToasterProvider />

      <div className="flex flex-col bg-transparent w-full h-auto">
        <div className="text-white text-2xl font-bold flex justify-start">Tododay</div>

        <div className="flex mb-4 items-center justify-center">
          <button onClick={changeView} className="p-4 text-[#444444] bg-white rounded-2xl w-[151px] h-[64px]">{view} View</button>
        </div>

        {view == "List" && (
          <div className="h-[556px] w-[1086px]">
            <ListView
              tasks={tasks}
              setTasks={setTasks}
              maxWeight={maxWeight}
            />
          </div>
        )}
        {view == "Eisenhower" && (
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
    </TodoListContext.Provider>
  )
}

export default App

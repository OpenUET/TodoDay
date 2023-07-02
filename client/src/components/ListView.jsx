import { useEffect, useState } from 'react';
import "../index.css";
import NewTask from './NewTask';
import Task from './Task';

const ListView = ({ }) => {
  const [maxWeight, setMaxWeight] = useState(10);
  const [tasks, setTasks] = useState([
    { name: "Task 1", weight: 0 },
    { name: "Task 2", weight: 0 },
    { name: "Task 3", weight: 0 }
  ])

  useEffect(() => {
    const totalWeight = tasks.reduce((acc, task) => acc + task.weight * 10, 0)
    setMaxWeight(100 - totalWeight)
  }, [tasks])

  return (
    <div className="gradient-background p-6 m-2 rounded-2xl flex flex-1 flex-col items-center justify-start w-full h-full">
      <div className='w-full flex'>
        <div className='flex-1'></div>
        <div className="flex-1 text-xl text-white font-bold mb-6">Today's Todo-list</div>
        <div className='flex-1 flex justify-end'>Complete: 0 / {100 - maxWeight}%</div>
      </div>

      <NewTask />

      <div className="overflow-y-auto w-full">
        {tasks.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            weight={task.weight || 0}
            setWeight={(newWeight) => {
              const tasksCopy = [...tasks]
              tasksCopy[index].weight = newWeight
              setTasks(tasksCopy)
            }}
            maxWeight={maxWeight}
          />
        ))}
      </div>
    </div>
  );
};

export default ListView;
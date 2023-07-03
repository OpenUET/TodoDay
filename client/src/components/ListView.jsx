import "../index.css";
import NewTask from './NewTask';
import Task from './Task';
import { AiFillQuestionCircle } from "react-icons/ai";

const ListView = ({ tasks, setTasks, maxWeight }) => {
  const onSetTaskWeight = (index, newWeight) => {
    const tasksCopy = [...tasks]
    tasksCopy[index].weight = newWeight
    setTasks(tasksCopy)
  }

  const onSetTaskStatus = (index, newStatus) => {
    const tasksCopy = [...tasks]
    tasksCopy[index].status = newStatus
    setTasks(tasksCopy)
  }

  return (
    <div className="gradient-background border-[3px] p-6 m-2 rounded-2xl flex flex-1 flex-col items-center justify-start w-full h-full">
      <div className='w-full mb-6 flex'>
        <div className='flex-1'></div>

        <div className="flex-1 text-xl text-white font-bold">Today's Todo-list</div>

        <div className='flex-1 flex justify-end items-center gap-1'>
          <span>Complete: </span>
          <span>{tasks.filter((task) => task.status === 'complete').reduce((acc, task) => acc + task.weight, 0) * 10}</span>
          <span>/</span>
          <span className={maxWeight && "text-red-500"}>{(10 - maxWeight) * 10}%</span>

          <AiFillQuestionCircle size={16} title={"Task weight % = Importance * Time cost %"} />
        </div>
      </div>

      <NewTask />

      <div className="overflow-y-auto w-full">
        {tasks.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            weight={task.weight}
            setWeight={(newWeight) => onSetTaskWeight(index, newWeight)}
            status={task.status}
            setStatus={(newStatus) => onSetTaskStatus(index, newStatus)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListView;
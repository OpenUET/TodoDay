import React, { useContext, useState } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import TaskPopup from './TaskPopup';

function NewTask({ bcolor, tcolor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { onCreateTask } = useContext(TodoListContext);

  const bcolorClass = bcolor === "green" ? "border-[#58a700]" : (bcolor === "red" ? "border-[#f81c1c]" : (bcolor === "grey" ? "border-[#3c3c3c]" : "border-[#1899d6]"));
  const tcolorClass = tcolor === "grey" ? "text-[#444444]" : "text-white";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createTask = ({ taskName, taskDescription }) => {
    onCreateTask({ title: taskName, description: taskDescription })
    closeModal();
  };

  return (
    <div className="w-full">
      <button
        className={`bg-transparent border-[3px] ${bcolorClass} border-dashed ${tcolorClass} font-bold py-2 px-4 rounded-2xl w-full`}
        onClick={openModal}
      >
        New Task
      </button>

      <TaskPopup isModalOpen={isModalOpen} onCancel={closeModal} onSubmit={createTask} type={"new-task"}/>
    </div>
  );
}

export default NewTask;

import { useState } from "react";

export default function TaskPopup({ isModalOpen, onCancel, onSubmit, type }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  return isModalOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="modal-overlay absolute inset-0 bg-black opacity-30"></div>

      <div className="modal-container bg-white w-[75%] lg:w-1/3 sm:w-[80%] p-4 mx-auto rounded-2xl shadow-lg z-50 flex flex-col justify-center">
        <div className="text-[#3c3c3c] font-bold text-xl pt-4 pb-4">{type === 'new-task' ? 'Create a new Task' : 'Edit Task'} </div>

        {/* Form */}
        <div className="modal-content pt-2 text-left px-4">
          <form>
            <div className="mb-2 flex items-center justify-center">
              <input
                type="text"
                placeholder="Task"
                className="appearance-none bg-white h-[3.0625rem] border-2 border-[#e5e5e5] rounded-2xl w-full py-[0.75rem] px-[1.25rem] text-slate-500 font-medium leading-tight focus:outline-none focus:shadow-outline"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                placeholder="Description"
                className="appearance-none bg-white h-[3.0625rem] border-2 border-[#e5e5e5] rounded-2xl w-full py-[0.75rem] px-[1.25rem] text-slate-500 font-medium leading-tight focus:outline-none focus:shadow-outline"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                required
              />
            </div>
          </form>
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-between items-center mb-4 mt-2">
          <div className="bg-[#ff4b4b] border-[#f92929] hover:bg-[#ff5858] hover:border-[#ff4848] transition-colors duration-300 border-b-4 h-[2.875rem] rounded-2xl cursor-pointer z-50 px-[0.5rem] py-[0.15rem] mr-4 ml-1 flex flex-1 items-center justify-center shrink-0">
            <button
              className="text-sm tracking-wider text-white font-bold uppercase w-full h-full"
              onClick={onCancel}
            >
              {type === 'new-task' ? 'Nope' : 'Remove'}
            </button>
          </div>
          <div className="bg-[#58cc02] border-[#58a700] hover:bg-[#79d731] hover:border-[#7abd2d] transition-colors duration-300 border-b-4 h-[2.875rem] rounded-2xl cursor-pointer z-50 px-[0.5rem] py-[0.15rem] ml-4 mr-1 flex flex-1 items-center justify-center shrink-0">
            <button
              className="text-sm tracking-wider text-white font-bold uppercase w-full h-full"
              onClick={() => onSubmit({ taskName, taskDescription })}
            >
              {type === 'new-task' ? 'Create' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
import React from 'react';
import NewTask from './NewTask';
import Task from './Task';
import "../index.css"

const ListView = ({ }) => {

  return (
    <div className="gradient-background p-4 m-2 rounded-2xl flex flex-1 flex-col items-center justify-start w-full h-full">
      <div className="text-xl text-white font-bold uppercase mb-2">Todo List</div>
      <NewTask/>
      <div className="overflow-y-auto w-full">
        <Task name = "Example"/>
        <Task name = "Example"/>
        <Task name = "Example"/>
      </div>
    </div>
  );
};

export default ListView;
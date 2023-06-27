import React from 'react';
import NewTask from './NewTask';

const EisenBlock = ({ color, bcolor, name }) => {
  const eisenClasses = `bg-[#${color}] border-b-4 border-[#${bcolor}] p-4 m-2 rounded-2xl flex flex-1 flex-col items-center justify-start w-[512px] h-[256px]`;

  return (
    <div className={eisenClasses}>
        <div className="text-xl font-bold uppercase mb-2">{name}</div>
        <NewTask bcolor={bcolor}/>
    </div>
  );
};

export default EisenBlock;

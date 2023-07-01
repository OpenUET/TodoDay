import React from 'react';
import NewTask from './NewTask';

const EisenBlock = ({ color, bcolor, name }) => {
  const colorClass = color === "green" ? "bg-[#58cc02]" : (color === "red" ? "bg-[#ff4b4b]" : "bg-[#1cb0f6]");
  const bcolorClass = bcolor === "green" ? "border-[#58a700]" : (bcolor === "red" ? "border-[#f81c1c]" : "border-[#1899d6]");
  const eisenClasses = `${colorClass} border-b-4 ${bcolorClass} p-4 m-2 rounded-2xl flex flex-1 flex-col items-center justify-start w-[512px] h-[256px]`;

  return (
    <div className={eisenClasses}>
        <div className="text-xl font-bold uppercase mb-2">{name}</div>
        <NewTask bcolor={bcolor}/>
    </div>
  );
};

export default EisenBlock;

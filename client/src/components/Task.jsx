import React, { useState } from 'react';
import { ImCheckmark, ImPencil } from "react-icons/im";

function Task({ name }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  return (
    <div className="w-full">
      <div className={`bg-white border-b-[3px] border-[#3c3c3c] text-[#3c3c3c] text-left font-bold py-2 px-4 my-2 rounded-2xl`}>
        <div className="flex justify-center items-center">
          <div className="flex flex-1 items-center">{name}</div>
          <div className="flex flex-1 justify-end items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className={`${isButtonVisible ? "flex fade-in" : "hidden"} bg-[#ffc800] hover:bg-[#ffd745] transition-colors duration-300 p-2 rounded mr-1`}>
                  <ImPencil className="text-white"/>
              </button>
              <button className={`${isChecked ? "bg-[#58cc02] hover:bg-[#79d731]" : "border-[#58cc02] hover:border-[#79d731]"} border-2 transition-colors duration-300 p-2 rounded`} onClick={handleCheck}>
                  <ImCheckmark className={`${isChecked ? "text-white" : "text-[#58c002]"}`}/>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
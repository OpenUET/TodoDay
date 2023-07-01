import React, { useState } from 'react';

function Task({ name }) {
  return (
    <div className="w-full">
      <div className={`bg-white border-b-[3px] border-[#3c3c3c] text-[#3c3c3c] text-left font-bold py-2 px-4 my-2 rounded-2xl w-full`}>
        {name}
      </div>
    </div>
  );
}

export default Task;

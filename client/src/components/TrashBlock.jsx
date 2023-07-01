import React from 'react';
import { BsTrashFill } from "react-icons/bs";

const TrashBlock = ({ }) => {
  return (
    <div className="bg-[#625f5f] border-b-4 border-[#3e3d3d] p-4 m-2 rounded-2xl flex flex-1 flex-col items-center justify-start w-[512px] h-[256px]">
        <div className="text-xl font-bold uppercase mb-2">No need to do</div>
        <div className="w-full h-full bg-transparent border-[#3e3d3d] border-[3px] border-dashed rounded-2xl flex justify-center items-center">
          <BsTrashFill className="text-[#3e3d3d] text-6xl"/>
        </div>
    </div>
  );
};

export default TrashBlock;

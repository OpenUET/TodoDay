import { useEffect, useState } from 'react'
import './App.css'
import { handleGetUsersAPI } from './services/user'
import EisenBlock from './components/EisenBlock'
import TrashBlock from './components/TrashBlock'
import ListView from './components/ListView'

function App() {
  const [view, setView] = useState("list");

  const changeView = () => {
    if (view == "list") setView("eisen");
    else setView("list");
  }

  return (
    <div className="flex flex-col bg-transparent w-full h-auto">
      <div className="text-white m-8 flex items-center justify-center">Tododay</div>
      <div className="flex mb-4 items-center justify-center">
        <button onClick={changeView} className="p-4 text-[#444444] bg-white rounded-2xl w-[128px] h-[64px]">Toggle View</button>
      </div>
      {view == "list" && (
        <div className="h-[500px] w-[1054px]">
          <ListView />
        </div>
      )}
      {view == "eisen" && (
        <>
        <div className="flex">
          <div className="flex w-[30px]"></div>
          <div className="text-white text-lg font-bold flex flex-1 items-center justify-center">Urgent</div>
          <div className="text-white text-lg font-bold flex flex-1 items-center justify-center">Not Urgent</div>
        </div>
        <div className="flex">
          <div className="w-[30px] text-white text-lg font-bold flex items-center justify-center -rotate-90">Important</div>
          <EisenBlock color={"green"} bcolor={"green"} name={"Todo now"}/>
          <EisenBlock color={"blue"} bcolor={"blue"} name={"Planning"}/>
        </div>
        <div className="flex">
          <div className="w-[30px] whitespace-nowrap text-white text-lg font-bold flex items-center justify-center -rotate-90 width-auto">Not Important</div>
          <EisenBlock color={"red"} bcolor={"red"} name={"Someone can do it for me"}/>
          <TrashBlock/>
        </div>
        </>
      )}
    </div>
  )
}

export default App

import { useContext, useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import ReactSlider from "react-slider"
import { TodoListContext } from "../context/TodoListContext"

export default function TaskWeight({ weight, setWeight }) {
  const { maxWeight } = useContext(TodoListContext)
  const [isValid, setIsValid] = useState(true)
  const [isValidTotal, setIsValidTotal] = useState(true)

  useEffect(() => {
    if (isValid && isValidTotal) return

    !isValid && toast.error("Each task weight cannot exceed 50%")
    !isValidTotal && toast.error("Total weight cannot exceed 100%")
  }, [isValid, isValidTotal])

  return (
    <ReactSlider
      min={0}
      max={10}
      defaultValue={0}
      ariaLabel={"weight slider"}
      ariaValuetext={state => `Thumb value ${state.valueNow}`}
      value={weight}
      onChange={(value) => {
        if (value > 5) setIsValid(false)
        if (value > maxWeight + weight) setIsValidTotal(false)

        setWeight(Math.min(value, maxWeight + weight, 5))
      }}
      onAfterChange={() => { setIsValid(true); setIsValidTotal(true) }}
      marks
      markClassName="bg-white w-1 h-2"
      renderThumb={(props, state) => {
        return <div {...props} key={props.key}><div className="absolute -top-7 -left-2">{parseFloat(state.valueNow) * 10}%</div></div>
      }}
      className={`flex items-center w-full h-[50px]`}
      trackClassName={"weight-track"}
    />
  )
}
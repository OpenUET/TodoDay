import ReactSlider from "react-slider"

export default function TaskWeight({ weight, setWeight, maxWeight }) {
  return (
    <ReactSlider
      min={0}
      max={50}
      defaultValue={0}
      ariaLabel={"weight slider"}
      ariaValuetext={state => `Thumb value ${state.valueNow}`}
      value={weight}
      onChange={(value) => {
        setWeight(Math.min(value, maxWeight + weight))
      }}
      step={5}
      renderThumb={(props, state) => {
        return <div {...props} key={props.key}><div className="absolute -top-6 text-white">{state.valueNow}%</div></div>
      }}
      className={`flex items-center w-full h-[50px]`}
      thumbClassName={`border-[1px] rounded-full w-8 h-8 cursor-pointer bg-white flex justify-center items-center shadow-md`}
      trackClassName="weight-track"
    />
  )
}
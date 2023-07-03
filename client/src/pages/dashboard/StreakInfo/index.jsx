const getDiffDays = (date1, date2) => {
  if (!date1 instanceof Date && !date2 instanceof Date) return 0
  if (date1 > date2) return 0

  const oneDay = 24 * 60 * 60 * 1000
  return Math.round(Math.abs((date1 - date2) / oneDay)) + 1
}

export default function StreakInfo({ icon, text, startDate, endDate }) {
  return (
    <div className='h-full border-b-2 border-stone-600 w-full flex flex-row flex-auto text-center text-amber-100'>
      <div className='w-24 flex justify-center items-center font-2xl'>{icon}</div>
      <div className='grow flex w-full flex-col justify-center items-start'>
        <p className='text-xl font-semibold text-amber-400'>{getDiffDays(startDate, endDate)} days</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

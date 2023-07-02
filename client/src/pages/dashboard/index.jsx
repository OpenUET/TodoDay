import { isWithinInterval } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './Calendar.css'

const startDate = new Date('2023-06-20')
const endDate = new Date('2023-07-10')
const dayOffs = ['2023-06-23', '2023-07-01']

const isWithinExcludingBounds = (date, startDate, endDate) => {
  const copiedDate = new Date(endDate.valueOf())
  const prevDayOfEnd = copiedDate.setDate(copiedDate.getDate() - 1)
  return isWithinInterval(date, {
    start: startDate,
    end: prevDayOfEnd
  })
}

const modifiers = {
  startDate: (date) => date.toDateString() === startDate.toDateString(),
  endDate: (date) => date.toDateString() === endDate.toDateString(),
  middleDate: (date) => isWithinExcludingBounds(date, startDate, endDate),
  dayOff: (date) => {
    return (
      isWithinExcludingBounds(date, startDate, endDate) &&
      !!dayOffs.find((dateStr) => date.toDateString() === new Date(dateStr).toDateString())
    )
  }
}

const modifiersClassNames = {
  startDate: '-selected -selected-start',
  endDate: '-selected -selected-end',
  middleDate: '-selected -selected-middle',
  dayOff: '-selected-dayoff'
}

export default function Dashboard() {
  return (
    <div className='w-screen h-screen bg-whit'>
      <div className='max-w-2xl m-auto border-2 border-orange-400 rounded-lg'>
        <Calendar
          minimumDate={startDate}
          maximumDate={endDate}
          format='dd MMM yyyy'
          modifiers={modifiers}
          modifiersClassNames={modifiersClassNames}
          locale={enGB}
        />
      </div>
    </div>
  )
}

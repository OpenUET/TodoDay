import { isWithinInterval } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './Calendar.css'

const isSameDate = (date1, date2) => {
  return date1.toDateString() === date2.toDateString()
}

const isWithinExcludingBounds = (date, startDate, endDate) => {
  if (isSameDate(startDate, endDate)) return false
  if (isSameDate(date, startDate) || isSameDate(date, endDate)) return false
  if (startDate > endDate) return false

  const copiedDate = new Date(endDate.valueOf())
  const prevDayOfEnd = copiedDate.setDate(copiedDate.getDate() - 1)
  return isWithinInterval(date, {
    start: startDate,
    end: prevDayOfEnd
  })
}

export default function CompletedDaysCalendar({ startDate, endDate, dayOffs }) {
  if (startDate > endDate) {
    return <>Empty</>
  }

  const modifiers = {
    startDate: (date) => isSameDate(date, startDate),
    endDate: (date) => isSameDate(date, endDate),
    middleDate: (date) => isWithinExcludingBounds(date, startDate, endDate),
    dayOff: (date) => {
      return (
        isWithinExcludingBounds(date, startDate, endDate) &&
        !!dayOffs?.find((dateStr) => isSameDate(date, new Date(dateStr)))
      )
    },
    today: (date) => isSameDate(date, new Date())
  }

  const modifiersClassNames = {
    startDate: '-selected -selected-start',
    endDate: '-selected -selected-end',
    middleDate: '-selected -selected-middle',
    dayOff: '-selected-dayoff', 
    today: '-today'
  }

  return (
    <>
      <Calendar
        minimumDate={startDate}
        maximumDate={endDate}
        format='dd MMM yyyy'
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        locale={enGB}
      />
    </>
  )
}

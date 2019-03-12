import React from 'react'

import CalendarHeader from './header'
import CalendarDays from './days'
import CalendarCells from './cells'

interface Props {
  currentMonth: Date
  selectedDate: Date
  contentsList: any
  onNextMonthClick: () => void
  onPrevMonthClick: () => void
  onDateClick: ({ date, contents }: { date: Date; contents?: any }) => void
}

const MonthCalendar = (props: Props) => {
  const {
    currentMonth,
    selectedDate,
    contentsList,
    onNextMonthClick,
    onPrevMonthClick,
    onDateClick,
  } = props
  return (
    <>
      <CalendarHeader
        currentMonth={currentMonth}
        onNextMonthClick={onNextMonthClick}
        onPrevMonthClick={onPrevMonthClick}
      />
      <CalendarDays currentMonth={currentMonth} />
      <CalendarCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        contentsList={contentsList}
        onDateClick={onDateClick}
      />
    </>
  )
}

export default MonthCalendar

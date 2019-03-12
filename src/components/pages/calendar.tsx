import React, { useContext, useEffect } from 'react'
import fetchCommon from 'src/modules/fetch'

import { CalendarContext, DispatchContext } from 'src/container/calendar'
import MonthCalendar from './month-calendar/calendar'
// component
const Calendar = () => {
  const state = useContext(CalendarContext)
  const dispatch = useContext(DispatchContext)
  console.info('--state--', state)
  useEffect(() => {
    console.warn('--useEffect--')
    fetchCommon({ method: 'get', url: 'xxxxx' })
  }, [])
  return (
    <>
      <MonthCalendar
        currentMonth={state.currentMonth}
        selectedDate={state.selectedDate.date}
        contentsList={[]}
        onNextMonthClick={() => dispatch({ type: 'addMonth' })}
        onPrevMonthClick={() => dispatch({ type: 'subMonth' })}
        onDateClick={(day) => dispatch({ type: 'setSelectedDay', payload: day })}
      />
    </>
  )
}

export default Calendar

import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import { CalendarContext, DispatchContext } from 'src/container/calendar'
import calendarReducer, { initialState, IfCalendarState } from 'src/reducer/calendar'
import Calendar from 'src/components/pages/calendar'
import '@babel/polyfill'

const App = (initialState: IfCalendarState) => {
  const [state, dispatch] = useReducer(calendarReducer, initialState)
  return (
    <CalendarContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Calendar />
      </DispatchContext.Provider>
    </CalendarContext.Provider>
  )
}

ReactDOM.render(
  <App {...initialState} />,
  document.getElementById('js-calendar')
)

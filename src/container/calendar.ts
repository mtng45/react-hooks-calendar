import React, { Dispatch } from 'react'
import { CalendarState } from 'src/reducer/calendar'
// Container
export const CalendarContext = React.createContext<CalendarState>(null as any)
export const DispatchContext = React.createContext<Dispatch<any>>(null as any)

import React, { Dispatch } from 'react'
import { IfCalendarState } from 'src/reducer/calendar'
// Container
export const CalendarContext = React.createContext<IfCalendarState>(null as any)
export const DispatchContext = React.createContext<Dispatch<any>>(null as any)

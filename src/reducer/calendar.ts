import dateFns from 'date-fns'
// reducer
export const initialState: IfCalendarState = {
  currentMonth: new Date(),
  selectedDate: {
    date: new Date(),
    contents: {},
  },
}

export interface IfCalendarState {
  currentMonth: Date
  selectedDate: {
    date: Date
    contents: {}
  }
}

const calendarReducer = (state: IfCalendarState = initialState, action: any) => {
  switch (action.type) {
    case 'addMonth': {
      return { ...state, currentMonth: dateFns.addMonths(state.currentMonth, 1) }
    }
    case 'subMonth': {
      return { ...state, currentMonth: dateFns.subMonths(state.currentMonth, 1) }
    }
    case 'setSelectedDay': {
      return { ...state, selectedDate: action.payload }
    }
    default:
      return state
  }
}

export default calendarReducer

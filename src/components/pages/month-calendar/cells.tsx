import React from 'react'
import dateFns from 'date-fns'
import styled from 'styled-components'

import Const from 'src/const'
import CalendarCell from './cell'

const { CALENDAR } = Const

interface Props {
  currentMonth: Date
  selectedDate: Date
  contentsList: any
  onDateClick: ({ date, contents }: { date: Date; contents?: any }) => void
}

const CalendarCells = (props: Props) => {
  const { currentMonth, selectedDate, contentsList, onDateClick } = props
  const monthStart = dateFns.startOfMonth(currentMonth)
  const monthEnd = dateFns.endOfMonth(monthStart)
  const startDate = dateFns.startOfWeek(monthStart, { weekStartsOn: 1 })
  const endDate = dateFns.endOfWeek(monthEnd)
  const thisYearMonth = dateFns.format(currentMonth, CALENDAR.FORMAT.DATE.YEAR_MONTH)
  const weekRows = []
  let days = []
  let day = startDate
  let contents
  let searchFormattedDate = ''
  while (day <= endDate) {
    // 週はじめ(day)が今月のYYYYMMより大きかったらストップ
    if (Number(dateFns.format(day, CALENDAR.FORMAT.DATE.YEAR_MONTH)) > Number(thisYearMonth)) {
      break
    }
    for (let i = 0; i < 7; i++) {
      searchFormattedDate = dateFns.format(day, CALENDAR.FORMAT.DATE.DEFAULT)
      contents = contentsList.find((data: any) => data.formatYmd === searchFormattedDate)
      const cloneDay = day
      days.push(
        <CalendarCell
          key={dateFns.format(day, CALENDAR.FORMAT.MONTH.CELLS)}
          date={cloneDay}
          isDisabled={!dateFns.isSameMonth(day, monthStart)}
          isSelected={dateFns.isSameDay(day, selectedDate)}
          contents={contents && contents}
          onDateClick={onDateClick}
        />
      )
      day = dateFns.addDays(day, 1)
      contents = {}
    }
    weekRows.push(<Week key={String(day)}>{days}</Week>)
    days = []
  }
  return <Month>{weekRows}</Month>
}

const Week = styled.div`
  width: 100%;
  display: flex;
`

const Month = styled.div`
  display: block;
`

export default CalendarCells

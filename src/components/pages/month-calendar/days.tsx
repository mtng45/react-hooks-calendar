import React from 'react'
import dateFns from 'date-fns'
import ja from 'date-fns/locale/ja'
import styled, { css } from 'styled-components'

import Const from 'src/const'

const { CALENDAR, COLOR } = Const

interface Props {
  currentMonth: Date
}

const CalendarDays = (props: Props) => {
  const { currentMonth } = props
  const dateFormat = CALENDAR.FORMAT.MONTH.DAYS
  const days = []
  const startDate = dateFns.startOfWeek(currentMonth, { weekStartsOn: 1 })
  for (let i = 0; i < 7; i++) {
    const date = dateFns.addDays(startDate, i)
    const day = dateFns.format(date, dateFormat, { locale: ja })
    days.push(
      <Cell key={i} isHoliday={day === '日'}>
        {day}
      </Cell>
    )
  }
  return <Wrapper>{days}</Wrapper>
}

const Cell = styled.div<{ isHoliday: boolean }>`
  text-align: center;
  width: calc(100% / 7);
  ${props =>
    props.isHoliday &&
    css`
      color: ${COLOR.SOFT_RED};
    `}
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`

export default CalendarDays

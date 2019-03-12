
import React from 'react'
import dateFns from 'date-fns'
import styled from 'styled-components'
import Const from 'src/const'

import TermNav from 'src/components/molecules/calendar/header'

const { CALENDAR, SIZE } = Const

interface Props {
  currentMonth: Date
  onNextMonthClick: () => void
  onPrevMonthClick: () => void
}

const CalendarHeader = (props: Props) => {
  const { currentMonth, onNextMonthClick, onPrevMonthClick } = props
  const dateFormat = CALENDAR.FORMAT.MONTH.HEADER
  return (
    <Wrapper>
      <TermNav
        type={'right'}
        term={`${dateFns.format(currentMonth, dateFormat)}月`}
        isPrevDisabled={false}
        isNextDisabled={false}
        onPrevClick={onPrevMonthClick}
        onNextClick={onNextMonthClick}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: ${SIZE.MARGIN.BASE}px;
`

export default CalendarHeader

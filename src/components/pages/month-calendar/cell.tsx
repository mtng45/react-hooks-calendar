import React from 'react'
import dateFns from 'date-fns'
import styled, { css } from 'styled-components'

import Const from 'src/const'

const { CALENDAR, COLOR } = Const

interface Props {
  date: Date
  isDisabled: boolean
  isSelected: boolean
  contents?: any
  onDateClick: ({ date, contents }: { date: Date; contents?: any }) => void
}

const CalendarCell = (props: Props) => {
  const { date, isDisabled, isSelected, contents, onDateClick } = props
  const formattedDate = dateFns.format(date, CALENDAR.FORMAT.MONTH.CELLS)
  return (
    <Cell isDisabled={isDisabled} onClick={() => onDateClick({ date, contents })}>
      {isSelected && <SelectedIcon />}
      {formattedDate}
      {contents && <div>{contents.availabilityKbnCd}</div>}
    </Cell>
  )
}

const Cell = styled.span<{ isDisabled: boolean }>`
  width: calc(100% / ${CALENDAR.DAYS_WEEK});
  height: 80px;
  padding: 16px;
  cursor: pointer;
  pointer-events: auto;

  &:hover {
    opacity: 0.5;
  }

  ${props =>
    props.isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
    `}
`

const SelectedIcon = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: ${COLOR.SOFT_RED};
`

export default CalendarCell

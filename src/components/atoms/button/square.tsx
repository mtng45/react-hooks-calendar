import React from 'react'
import styled, { css } from 'styled-components'
import Const from 'src/const'

const { COLOR, SIZE } = Const

interface Props {
  isDisabled?: boolean
  children: string | JSX.Element
}

const SquareButton = (props: Props) => {
  return (
    <StyledSquareButton disabled={props.isDisabled}>
      { props.children }
    </StyledSquareButton>
  )
}

const StyledSquareButton = styled.div<{
  disabled?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 1px solid ${COLOR.LIGHT_GRAY};
  border-radius: ${SIZE.RADIUS}px;
  background-color: ${COLOR.VERY_LIGHT_GRAY};

  ${props =>
    props.disabled &&
    css`
      background-color: ${COLOR.GRAY};
      opacity: 0.3;
      pointer-events: none;
    `}

  :hover {
    opacity: 0.75;
  }
`

export default SquareButton

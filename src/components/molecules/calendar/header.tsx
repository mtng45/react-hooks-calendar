import * as React from 'react'
import styled, { css } from 'styled-components'

import Const from 'src/const'

const { COLOR, SIZE } = Const

interface Props {
  type: 'left' | 'right'
  term: string
  prevClassName?: string
  nextClassName?: string
  isPrevDisabled: boolean
  isNextDisabled: boolean
  onPrevClick: () => void
  onNextClick: () => void
}

const TermNav = (props: Props) => {
  const {
    type,
    term,
    prevClassName,
    nextClassName,
    isPrevDisabled,
    isNextDisabled,
    onPrevClick,
    onNextClick,
  } = props
  return (
    <Warrper type={type}>
      <SquareButton
        type={'prev'}
        className={prevClassName}
        isDisabled={isPrevDisabled}
        onClick={onPrevClick}
      >
        ＜
      </SquareButton>
      <Term>{term}</Term>
      <SquareButton
        type={'next'}
        isDisabled={isNextDisabled}
        className={nextClassName}
        onClick={onNextClick}
      >
        ＞
      </SquareButton>
    </Warrper>
  )
}

const Warrper = styled.div<{
  type: 'left' | 'right'
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.type === 'left' ? 'flex-start' : 'flex-end')};

  @media (max-width: ${SIZE.MEDIA.BASE}px) {
    justify-content: space-between;
  }
`

const SquareButton = styled.div<{
  isDisabled: boolean
  type: 'prev' | 'next'
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 1px solid ${COLOR.LIGHT_GRAY};
  border-radius: ${SIZE.RADIUS.BASE}px;
  background-color: ${COLOR.VERY_LIGHT_GRAY2};

  ${props =>
    props.isDisabled &&
    css`
      background-color: ${COLOR.GRAY};
      opacity: 0.3;
      pointer-events: none;
    `}

  :hover {
    opacity: 0.75;
  }

  > img {
    width: 16px;
    height: 16px;
    ${props =>
    props.type === 'prev' &&
      css`
        transform: rotate(90deg);
      `}
    ${props =>
    props.type === 'next' &&
      css`
        transform: rotate(270deg);
      `}
  }
`

const Term = styled.span`
  display: inline-block;
  text-align: center;
  font-weight: 600;
  line-height: 1;
  height: 1em;
  font-size: ${SIZE.FONT.LARGE}px;

  @media (min-width: ${SIZE.MEDIA.BASE}px) {
    padding: 0 16px;
  }
`

export default TermNav

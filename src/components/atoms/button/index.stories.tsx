import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './'

const { SquareButton } = Button

storiesOf('Alert', module)
  .add('default', () => (
    <div>
      <SquareButton>
        a
      </SquareButton>
    </div>
  ))

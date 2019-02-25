import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyles from '../src/global-styles'

const withGlobalStyles = (storyFn) => (
  <React.Fragment>
    <GlobalStyles />
    {storyFn()}
  </React.Fragment>
)
addDecorator(withGlobalStyles)

const req = require.context('../src/components', true, /\index.stories\.tsx?$/)
const loadStories = () => {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)

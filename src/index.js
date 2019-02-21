import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Calender = () => {
  const [count, setCount] = useState(0)

  return (
    <div onClick={() => setCount(count + 1)}>
      {count} + Calender
    </div>
  )
}

ReactDOM.render(
  <Calender />,
  document.getElementById('js-calendar')
)

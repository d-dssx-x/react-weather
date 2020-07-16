import React from 'react'
import './index.scss'
import LeftColToday from './LeftColToday'
import RightColToday from './RightColToday'


const Today = () => {
  return (
    <div className="weather">
      <LeftColToday />
      <RightColToday />
    </div>
  )
}

export default Today
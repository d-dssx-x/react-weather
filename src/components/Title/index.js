import React, { useContext } from 'react'
import './index.scss'
import { getDate } from '../../helpers/date.helper'
import WeatherContext from '../../context/WeatherContext'

const Title = () => {
  const { name, dt, timezone } = useContext(WeatherContext)
  return (
    <div className="city">
      <h1>{name}</h1>
      <h2>{getDate(dt, timezone)}</h2>
    </div>
  )
}

export default Title

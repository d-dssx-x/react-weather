import React, { useContext } from 'react'
import './LeftColToday.scss'
import {toCelsius} from '../../helpers/weather.helper'
import {selectIcon} from '../../helpers/fontClasses.helper'
import WeatherContext from '../../context/WeatherContext'


const LeftColToday = () => {
  const { temp, icon, description} = useContext(WeatherContext)
  return (
      <div className="col f">
        <div className="wrapper">
          <i className={selectIcon(icon)}></i>
          <div className="temp">
            <span className="value">
              {`${toCelsius(temp)}`}
            </span>
            <span className="desc">
              {description}
            </span>
          </div>
        </div>
      </div>
  )
}

export default LeftColToday
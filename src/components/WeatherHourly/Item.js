import React from 'react'
import './index.scss'
import { toCelsius } from '../../helpers/weather.helper'
import { selectIcon } from '../../helpers/fontClasses.helper'
import PropTypes from 'prop-types'

const Item = ({ main: {temp}, dt_txt, weather }) => {
  return (
    <div className="item">
      <div className="time">
        <span>{dt_txt.slice(8, 10) + '.' + dt_txt.slice(5, 7)}</span>
        <time>{dt_txt.slice(10, dt_txt.length - 3)}</time>
      </div>
      <div className="icon">
        <i className={selectIcon(weather[0].icon)}></i>
      </div>
      <div className="temp">
        {toCelsius(temp)}
      </div>
    </div>
  )
}

Item.propTypes = {
  temp: PropTypes.number,
  dt_txt: PropTypes.string,
  main: PropTypes.object,
  weather: PropTypes.array,
}

export default Item

import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Item from './Item'


const WeatherHourly = ({ list }) => {
  const lowList = list.splice(0, 10)
  return (
    <div className="hourly">
      {lowList.map((el, i) => <Item
        key={i}
        {...el}/> )}
    </div>
  )
}

WeatherHourly.propTypes = {
  list: PropTypes.array,
}

export default WeatherHourly

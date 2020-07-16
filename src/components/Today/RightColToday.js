import React, { useContext } from 'react'
import './RightColToday.scss'
import {toCelsius, compass} from '../../helpers/weather.helper'
import WeatherContext from '../../context/WeatherContext'
import PropTypes from 'prop-types'


const RightColToday = () => {
  const { temp_max, temp_min, feels_like, humidity, speed, deg } = useContext(WeatherContext)
  const data = [
    {
      val: '' + toCelsius(temp_max),
      desc: 'Max',
      isTemp: true
    },{
      val: '' + toCelsius(feels_like),
      desc: 'Feels like',
      isTemp: true
    },{
      val: speed + 'm/s',
      desc: 'Speed',
      isTemp: false
    },
    {
      val: '' + toCelsius(temp_min),
      desc: 'Min',
      isTemp: true
    },{
      val: humidity + '%',
      desc: 'Humidity',
      isTemp: false
    },{
      val: compass(deg),
      desc: 'Direction',
      isTemp: false
    },
  ]
  return (
    <div className="col s">
      <Row values={data.slice(0,3)}/>
      <Row values={data.slice(3,6)}/>
    </div>
  )
}

const Row = ({ values }) => {
  return (
    <div className="row">
      { values.map((el, i) => <Item
        {...el}
        key={i} />)}
    </div>
  )
}

Row.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
}


const Item = ({ val, desc, isTemp }) => {
  const classNames = () => {
    return isTemp ? 'val t' : 'val'
  }
  return (
    <div className="item">
        <div className={classNames()}>
          {val}
        </div>
        <div className="des">
          { desc }
        </div>
    </div>
  )
}

Item.propTypes = {
  val: PropTypes.string,
  desc: PropTypes.string,
  isTemp: PropTypes.bool,
}


export default RightColToday
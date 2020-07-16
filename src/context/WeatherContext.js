import React from 'react'

const WeatherContext = React.createContext({
  name: '',
  temp: 0,
  description: '',
  icon: '',
  temp_max: 0,
  temp_min: 0,
  feels_like: 0,
  humidity: 0,
  speed: 0,
  deg: 0,
})

export default WeatherContext
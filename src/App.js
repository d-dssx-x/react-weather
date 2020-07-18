import React, { useEffect, useState } from 'react'
import { useHttp } from './hook/http.hook'
import CityField from './components/CityField'
import Title from './components/Title'
import Today from './components/Today'
import WeatherContex from './context/WeatherContext'
import Loading from './components/Loading'
import Error from './components/Error'
import weatherJSON from './data/weather.json'
import forecastJSON from './data/forecast.json'
import { checkDay } from './helpers/date.helper'
import WeatherHourly from './components/WeatherHourly'

function App() {
  const [city, setCity] = useState('Minsk')

  const [className, setClassName] = useState('day')

  const { request, loading, error, clearError } = useHttp()

  const [weather, setWeather] = useState(weatherJSON)

  const [weatherList, setWeatherList] = useState(forecastJSON)


  useEffect(() => {
    const getDate = async () => {
      const data = await request(city, true)
      return data ? setWeather(data) : ''
    }
    getDate()
  }, [city])

  useEffect(() => {
    switchDay()
  }, [city, weather])

  useEffect(() => {
    const getDate = async () => {
      const data = await request(city, false)
      return data ? setWeatherList(data) : ''
    }

    getDate()
  }, [city])


  const switchDay = () => {
    setClassName(checkDay(weather.sys.sunrise, weather.sys.sunset, weather.dt))
  }

  const setCityHandler = (value) => {
    clearError()
    return setCity(value)
  }

  return (
    <WeatherContex.Provider
      value={
        { ...weather.main, ...weather.weather[0],
          ...weather.wind, name: weather.name,
          dt: weather.dt, timezone: weather.timezone }}>
      <div className={'container-no ' + className}>
        {(!loading && !error) &&
        <>
          <CityField setCity={setCityHandler}/>
          <Title />
          <Today />
          <WeatherHourly {...weatherList}/>
        </>}
        {(loading && !error) &&
          <Loading />
        }
        {error &&
          <>
            <CityField setCity={setCityHandler} />
            <Error {...error}/>
          </>
        }
      </div>
    </WeatherContex.Provider>
  )
}

export default App

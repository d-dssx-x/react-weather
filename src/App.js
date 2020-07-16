import React, { useEffect, useState } from 'react'
import {useHttp} from './hook/http.hook'
import CityField from './components/CityField'
import Title from './components/Title'
import Today from './components/Today'
import WeatherContex from './context/WeatherContext'
import Loading from './components/Loading'
import Error from './components/Error'
import weatherJSON from './data/weather.json'

function App() {
  const [city, setCity] = useState('Minsk')
  const [className, setClassName] = useState('day')
  const {request, loading, error, clearError} = useHttp()
  const [weather, setWeather] = useState(weatherJSON)
  useEffect(() => {
    const getDate = async () => {
      const data = await request(city, true)
      return data ? setWeather(data) : setWeather(weatherJSON)
    }
    getDate ()
    switchDay(weather.weather[0].icon)
  }, [city])

  const switchDay = (icon) => {
    return icon[icon.length - 1] === 'd' ?  setClassName('day') : setClassName('night')
  }

  const setCityHandler = (value) => {
    clearError()
    return setCity(value)
  }

  return (
    <WeatherContex.Provider value={{...weather.main, ...weather.weather[0],...weather.wind , name: weather.name, dt: weather.dt, timezone: weather.timezone}}>
        <div className={'container-no ' + className}>
          {(!loading && !error) &&
          <>
            <CityField setCity={setCityHandler}/>
            <Title />
            <Today />
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

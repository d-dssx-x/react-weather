import { useState } from "react"

export const useHttp = () => {
  const API_KEY = 'ef3cca48dcfd23339472bdbcf2d3f4f5'
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = async (city = 'Minsk', isDay = true) => {
    setLoading(true)
    try {
      let full_URL = isDay
        ? `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        : `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`

      if(process.env.NODE_ENV === 'development') {
        full_URL = proxy + full_URL
      }
      const res = await fetch(full_URL, {
        method: 'GET',
      })
      if (!res.ok) {
        setLoading(false)
        setError(await res.json())
        return
      }

      const data = await res.json()

      setLoading(false)

      return data
    } catch (e) {
      setLoading(false)
      setError(e)
    }
  }

  const clearError = () => setError(null)

  return {request, loading, error, clearError}
}

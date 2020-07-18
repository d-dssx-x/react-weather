const _date = (dt, timezone = 0) => {
  return new Date(dt * 1000 + timezone * 1000)
}

export const getDate = (dt, timezone) => {
  const date = _date(dt, timezone)
  const day = date.getUTCDate()
  const mon = date.getMonth()
  const week = date.getUTCDay()
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday']

  return `${months[mon]} ${day} ${days[week]}`
}

export const checkDay = (sunrize, sunset, dt) => {
  console.group()
  console.log('Sunrise ', sunrize)
  console.log('Sunset ', sunset)
  console.log('Now ', dt)
  console.groupEnd()
  if (dt > sunrize && dt < sunset) return 'day'
  return 'night'
}

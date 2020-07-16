export const getDate = (dt, timezone) => {
  console.log(new Date(dt * 1000 - 10800000 + timezone * 1000))
  console.log(dt * 1000 - 10800000 + timezone * 1000)
  const date = new Date(dt * 1000 - 10800000 + timezone * 1000)
  const day = date.getDate()
  const mon = date.getMonth()
  const week = date.getDay()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return `${months[mon]} ${day} ${days[week]}`
}
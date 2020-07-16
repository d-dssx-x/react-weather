export const  toCelsius = (temp) => {
  return Math.floor(temp - 273.15)
}
export const compass = (deg) => {
  const valuse = [{
    d: 0,
    name: 'North',
  },
  {
    d: 45,
    name: 'North-East',
  },
  {
    d: 90,
    name: 'East',
  },
  {
    d: 135,
    name: 'South-East',
  },
  {
    d: 180,
    name: 'South',
  },
  {
    d: 225,
    name: 'South-West',
  },
  {
    d: 270,
    name: 'West',
  },
  {
    d: 315,
    name: 'North-West',
  },
  {
    d: 360,
    name: 'North',
  }
]
  return valuse.reduce((prev, curr) => Math.abs(prev.d - deg) < Math.abs(curr.d - deg) ? prev : curr).name
}
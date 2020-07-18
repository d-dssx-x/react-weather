export const selectIcon = (icon) => {
  switch (icon) {
    case '01d':
      return 'fas fa-sun'
    case '01n':
      return 'fas fa-moon'
    case '02d':
      return 'fas fa-cloud-sun'
    case '02n':
      return 'fas fa-cloud-moon'
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return 'fas fa-cloud night'
    case '09d':
    case '09n':
      return 'fas fa-cloud-showers-heavy'
    case '10d':
      return 'fas fa-cloud-sun-rain'
    case '10n':
      return 'fas fa-cloud-moon-rain'
    case '11d':
    case '11n':
      return 'fas fa-bolt'
    case '13d':
    case '13n':
      return 'far fa-snowflake'
    case '50d':
    case '50n':
      return 'fas fa-smog'
    default:
      return 'fas fa-rainbow'
  }
}

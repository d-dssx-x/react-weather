import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const CityField = ({ setCity }) => {
  const [value, setValue] = useState('')

  const onChangeHandler = (e) => {
    return setValue(e.target.value)
  }

  const pressEnterHandler = (e) => {
    if (e.key === 'Enter') {
      setCity(value)
      return setValue('')
    }
  }

  return (
    <div className="field">
      <i className="fas fa-search"></i>
      <input
        placeholder="Minsk"
        value={value}
        onChange={onChangeHandler}
        onKeyPress={pressEnterHandler}
      />
    </div>
  )
}
CityField.propTypes = {
  setCity: PropTypes.func,
}


export default CityField

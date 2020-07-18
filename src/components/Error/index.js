import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Error = ({ cod = '000', message = 'Bad' }) => {
  return (
    <div className="error-wrapper">
      <div className="error">
        <h1>{cod}</h1>
        <h2>{message}</h2>
      </div>
      <img
        className="cat"
        // eslint-disable-next-line no-undef
        src={require('../../assets/img/bad.png')}
        alt="Cat"/>
    </div>
  )
}
Error.propTypes = {
  cod: PropTypes.any,
  message: PropTypes.any,
}

export default Error

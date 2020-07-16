import React from 'react'
import './index.scss'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center loader">
      <div className="spinner-border">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
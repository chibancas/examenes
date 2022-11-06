import PropTypes  from 'prop-types'
import React from 'react'


const CouterApp = ( { valor }) => {
  return (
    <>
      <h1>Contador</h1>
      <h2> { valor }</h2>
    </>
  )
}

export default CouterApp

CouterApp.propTypes = {
    valor: PropTypes.number.isRequired
}

CouterApp.defaultProps = {
    valor: 0
}
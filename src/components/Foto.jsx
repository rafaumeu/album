import PropTypes from 'prop-types'
import React from 'react'

const Foto = ({ dados }) => {
  return (
    <div className='foto'>
      <img src={dados.urls.small} alt={dados.alt_description} />
    </div>
  )
}

Foto.propTypes = {
  dados: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
}

export default Foto

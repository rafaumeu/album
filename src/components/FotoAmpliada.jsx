import PropTypes from 'prop-types'
import React from 'react'

const FotoAmpliada = ({ foto, setFotoAmpliada }) => {
  return (
    <div
      className='foto-ampliada-backdrop'
      onClick={() => setFotoAmpliada(null)}
    >
      <div className='foto-ampliada-container'>
        <img src={foto.urls.regular} alt={foto.alt_description} />
      </div>
    </div>
  )
}

FotoAmpliada.propTypes = {
  foto: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  setFotoAmpliada: PropTypes.func.isRequired,
}

export default FotoAmpliada

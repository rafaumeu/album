import PropTypes from 'prop-types'
import React from 'react'

const Foto = ({ dados, setFotoAmpliada }) => {
  return (
    <div className='foto' onClick={() => setFotoAmpliada(dados)}>
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
  setFotoAmpliada: PropTypes.func.isRequired,
}

export default Foto

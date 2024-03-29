import PropTypes from 'prop-types'
import React from 'react'

import Foto from './Foto'

const FotoList = ({ fotos, setFotoAmpliada }) => {
  return (
    <div className='album'>
      {Array.isArray(fotos) &&
        fotos.map((foto) => (
          <Foto key={foto.id} dados={foto} setFotoAmpliada={setFotoAmpliada} />
        ))}
    </div>
  )
}

FotoList.propTypes = {
  fotos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  setFotoAmpliada: PropTypes.func.isRequired,
}

export default FotoList

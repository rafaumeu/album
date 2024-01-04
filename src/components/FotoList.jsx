import PropTypes from 'prop-types'
import React from 'react'

import Foto from './Foto'

const FotoList = ({ fotos }) => {
  return (
    <div className='album'>
      {Array.isArray(fotos) &&
        fotos.map((foto) => <Foto key={foto.id} dados={foto} />)}
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
}

export default FotoList

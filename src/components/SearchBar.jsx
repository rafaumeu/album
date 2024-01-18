import PropTypes from 'prop-types'
import React, { useState } from 'react'
const SearchBar = ({ setQuery, setCategoria, setActivateSearch }) => {
  const [localQuery, setLocalQuery] = useState('')
  const categorias = [
    'Natureza',
    'Pessoas',
    'Animais',
    'Esportes',
    'Tecnologia',
  ]
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Pesquisar fotos...'
        value={localQuery}
        onChange={(e) => {
          setQuery(localQuery)
          setLocalQuery(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setQuery(localQuery)
          setActivateSearch(true)
        }}
      >
        Pesquisar
      </button>
      <select
        onChange={(e) => {
          setCategoria(e.target.value)
          setActivateSearch(true)
        }}
      >
        <option value=''>Todas as categorias</option>
        {categorias.map((categoria) => (
          <option value={categoria} key={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  )
}
SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  setCategoria: PropTypes.func.isRequired,
  setActivateSearch: PropTypes.func.isRequired,
}
export default SearchBar

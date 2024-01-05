import PropTypes from 'prop-types'
import React from 'react'
const SearchBar = ({ setQuery, setCategoria, setActivateSearch }) => {
  const categorias = ['Natureza', 'Pessoas', 'Animais', 'Esportes']
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Pesquisar fotos...'
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setActivateSearch(true)}>Pesquisar</button>
      <select
        onChange={(e) => {
          setCategoria(e.target.value)
          setActivateSearch(true)
        }}
      >
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

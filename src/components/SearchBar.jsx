import React from 'react'

const SearchBar = () => {
  const categorias = ['Natureza', 'Pessoas', 'Animais', 'Esportes']
  return (
    <div className='search-bar'>
      <input type='text' placeholder='Pesquisar fotos...' />
      <button>Pesquisar</button>
      <select>
        {categorias.map((categoria) => (
          <option value={categoria} key={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar

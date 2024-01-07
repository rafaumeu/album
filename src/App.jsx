import axios from 'axios'
import React, { useEffect, useState } from 'react'

import config from '../.config'
import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import SearchBar from './components/SearchBar'

function App() {
  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fotos, setFotos] = useState([])
  const [fotoAmpliada, setFotoAmpliada] = useState(null)
  const [activateSearch, setActivateSearch] = useState(false)

  const fetchData = async ({ query, categoria }) => {
    const apiKey = config.REACT_APP_UNSPLASH_ACCESS_KEY
    const apiUrl = 'https://api.unsplash.com/photos/random'

    try {
      if (query || categoria) {
        let searchQuery = query
        if (query && categoria) {
          searchQuery = `${query} ${categoria}`
        } else if (categoria) {
          searchQuery = categoria
        }
        const response = await axios.get(
          'https://api.unsplash.com/search/photos',
          {
            params: {
              client_id: apiKey,
              query: searchQuery,
            },
          }
        )
        setFotos(response.data.results)
      }
      const response = await axios.get(apiUrl, {
        params: {
          client_id: apiKey,
          count: 12,
        },
      })

      setFotos(response.data)
    } catch (error) {
      console.log('Erro ao buscar dados:', error)
    }
  }

  useEffect(() => {
    fetchData({ query, categoria })
  }, [query, categoria])
  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, categoria })
    }
  }, [activateSearch, query, categoria])
  return (
    <div className='container'>
      <SearchBar
        setQuery={setQuery}
        setCategoria={setCategoria}
        setActivateSearch={setActivateSearch}
      />
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      )}
    </div>
  )
}

export default App

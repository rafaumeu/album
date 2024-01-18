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
        try {
          const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
              params: {
                client_id: apiKey,
                query: searchQuery,
              },
            }
          )
          if (
            response.status === 200 &&
            response.data &&
            response.data.results
          ) {
            setFotos(response.data.results)
          }
        } catch (error) {
          console.error('Ocorreu um erro ao Buscar as fotos: ', error)
        }
        return
      }
      const response = await axios.get(apiUrl, {
        params: {
          client_id: apiKey,
          count: 12,
        },
      })
      if (response.status === 200 && response.data) {
        setFotos(response.data)
      }
    } catch (error) {
      console.error('Ocorreu um erro ao buscar as fotos aleatórias: ', error)
    }
  }

  useEffect(() => {
    fetchData({ query, categoria })
  }, [query, categoria])
  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, categoria })
      setActivateSearch(false)
    }
  }, [activateSearch, query, categoria])
  return (
    <div className='container'>
      <SearchBar
        setQuery={setQuery}
        setCategoria={setCategoria}
        setActivateSearch={setActivateSearch}
      />
      {fotos.length > 0 && (
        <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
      )}
      {fotos.length === 0 && <h2>Não foi possível encontrar fotos</h2>}
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      )}
    </div>
  )
}

export default App

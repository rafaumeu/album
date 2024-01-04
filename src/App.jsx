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

  const fetchData = async ({ query, categoria }) => {
    const apiKey = config.REACT_APP_UNSPLASH_ACCESS_KEY
    const apiUrl = 'https://api.unsplash.com/photos/random'

    try {
      const response = await axios.get(apiUrl, {
        params: {
          client_id: apiKey,
          count: 10,
        },
      })

      setFotos(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
      setFotos([]) // Definir fotos como um array vazio em caso de erro
    }
  }

  useEffect(() => {
    fetchData({ query, categoria })
  }, [query, categoria])

  return (
    <div className='container'>
      <SearchBar />
      <FotoList fotos={fotos} />
      <FotoAmpliada />
    </div>
  )
}

export default App

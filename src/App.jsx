import axios from 'axios'
import React, { useEffect, useState } from 'react'

import config from '../.config'
import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import SearchBar from './components/SearchBar'

function App() {
  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('')
  const fetchData = async ({ query, categoria }) => {
    const apiKey = config.REACT_APP_UNSPLASH_ACCESS_KEY
    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: {
        client_id: apiKey,
      },
    })
  }
  useEffect(() => {
    fetchData({ query, categoria })
  }, [query, categoria])

  return (
    <div className='container'>
      <SearchBar />
      <FotoList />
      <FotoAmpliada />
    </div>
  )
}

export default App

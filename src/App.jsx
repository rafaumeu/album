import React, { useEffect, useState } from 'react'

import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className='container'>
      <SearchBar />
      <FotoList />
      <FotoAmpliada />
    </div>
  )
}

export default App

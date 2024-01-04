import { render } from '@testing-library/react'
import React from 'react'

import SearchBar from '../components/SearchBar'

describe('SearchBar', () => {
  it('renders without crashing', () => {
    render(<SearchBar />)
  })
})

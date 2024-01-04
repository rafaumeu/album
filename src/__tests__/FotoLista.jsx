import { render } from '@testing-library/react'
import React from 'react'

import FotoList from '../components/FotoList'

describe('FotoList', () => {
  it('renders without crashing', () => {
    render(<FotoList />)
  })
})

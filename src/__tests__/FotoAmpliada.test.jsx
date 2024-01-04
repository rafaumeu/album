import { render } from '@testing-library/react'
import React from 'react'

import FotoAmpliada from '../components/FotoAmpliada'

describe('FotoAmpliada', () => {
  it('renders without crashing', () => {
    render(<FotoAmpliada />)
  })
})

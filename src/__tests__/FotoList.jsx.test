import { render } from '@testing-library/react'
import React from 'react'

import FotoList from '../components/FotoList'

describe('FotoList', () => {
  it('renders without crashing', () => {
    const fotos = [
      {
        id: '1',
        urls: { small: 'https://example.com/image1.jpg' },
        alt_description: 'Alt 1',
      },
      {
        id: '2',
        urls: { small: 'https://example.com/image2.jpg' },
        alt_description: 'Alt 2',
      },
    ]

    render(<FotoList fotos={fotos} />)
  })
})

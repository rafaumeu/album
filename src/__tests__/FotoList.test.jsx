import { getAllByRole, render, screen } from '@testing-library/react'
import React from 'react'
import { vi } from 'vitest'

import FotoList from '../components/FotoList'

describe('FotoList', () => {
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
  it('renders without crashing with empty list', () => {
    render(<FotoList fotos={[]} />)
  })

  it('renders without crashing', () => {
    render(<FotoList fotos={fotos} />)
  })

  it('renders photos with unique keys', () => {
    render(<FotoList key={fotos.id} fotos={fotos} setFotoAmpliada={false} />)
    const photoElements = screen.getAllByRole('img')
    expect(photoElements).toHaveLength(2)
  })
})

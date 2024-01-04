import { render } from '@testing-library/react'
import React from 'react'

import Foto from '../components/Foto'

describe('Foto', () => {
  it('renders without crashing', () => {
    const fotoData = {
      urls: { small: 'https://example.com/image.jpg' },
      alt_description: 'Alt Description',
    }

    render(<Foto dados={fotoData} />)
  })

  it('renders image with correct alt text', () => {
    const fotoData = {
      urls: { small: 'https://example.com/image.jpg' },
      alt_description: 'Alt Description',
    }

    const { getByAltText } = render(<Foto dados={fotoData} />)
    const imageElement = getByAltText('Alt Description')

    expect(imageElement).toBeInTheDocument()
  })

  it('requires dados prop to be provided', () => {
    // Teste se o componente gera um erro se não receber as props necessárias
    const consoleErrorSpy = jest.spyOn(console, 'error')
    consoleErrorSpy.mockImplementation(() => {}) // Ignorar mensagens de erro na console

    expect(() => render(<Foto />)).toThrowError()

    consoleErrorSpy.mockRestore() // Restaurar comportamento normal da console.error
  })
})

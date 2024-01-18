import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { vi } from 'vitest'

import Foto from '../components/Foto'

describe('<Foto />', () => {
  const fotoData = {
    urls: { small: 'https://example.com/image.jpg' },
    alt_description: 'Alt Description',
  }
  it('renders without crashing', () => {
    render(<Foto dados={fotoData} />)
  })

  it('renders image with correct alt text', () => {
    const { getByAltText } = render(<Foto dados={fotoData} />)
    const imageElement = getByAltText('Alt Description')

    expect(imageElement).toBeInTheDocument()
  })
  it('calls setFotoAmpliada when clicked', () => {
    const setFotoAmpliadaMock = vi.fn()
    const { getByAltText } = render(
      <Foto dados={fotoData} setFotoAmpliada={setFotoAmpliadaMock} />
    )

    const imageElement = getByAltText('Alt Description')

    fireEvent.click(imageElement)

    expect(setFotoAmpliadaMock).toHaveBeenCalledWith(fotoData)
  })
  it('renders image with correct alt text for different data', () => {
    const fotoDataWithDifferentAlt = {
      urls: { small: 'https://example.com/another-image.jpg' },
      alt_description: 'Another Alt Description',
    }
    const { getByAltText } = render(<Foto dados={fotoDataWithDifferentAlt} />)
    const imageElement = getByAltText('Another Alt Description')

    expect(imageElement).toBeInTheDocument()
  })
  it('renders image with correct alt text for different data', () => {
    const fotoDataWithDifferentAlt = {
      urls: { small: 'https://example.com/another-image.jpg' },
      alt_description: 'Another Alt Description',
    }
    const { getByAltText } = render(<Foto dados={fotoDataWithDifferentAlt} />)
    const imageElement = getByAltText('Another Alt Description')

    expect(imageElement).toBeInTheDocument()
  })
  it('matches snapshot', () => {
    const { container } = render(
      <Foto dados={fotoData} setFotoAmpliada={() => {}} />
    )
    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/react'
import React from 'react'

import FotoAmpliada from '../components/FotoAmpliada'

describe('FotoAmpliada', () => {
  it('renders without crashing', () => {
    render(
      <FotoAmpliada
        foto={{
          urls: { regular: 'url', small: 'url' },
          alt_description: 'desc',
        }}
        setFotoAmpliada={() => {}}
      />
    )
  })

  it('renders the backdrop and container', () => {
    const { container } = render(
      <FotoAmpliada
        foto={{
          urls: { regular: 'url', small: 'url' },
          alt_description: 'desc',
        }}
        setFotoAmpliada={() => {}}
      />
    )

    expect(container.firstChild).toHaveClass('foto-ampliada-backdrop')
    const containerElement = container.querySelector('.foto-ampliada-container')
    expect(containerElement).toHaveClass('foto-ampliada-container')
  })

  it('calls setFotoAmpliada when backdrop is clicked', () => {
    const setFotoAmpliadaMock = jest.fn()
    const { container } = render(
      <FotoAmpliada
        foto={{
          urls: { regular: 'url', small: 'url' },
          alt_description: 'desc',
        }}
        setFotoAmpliada={setFotoAmpliadaMock}
      />
    )
    const backdrop = container.querySelector('.foto-ampliada-backdrop')
    backdrop.click()
    expect(setFotoAmpliadaMock).toHaveBeenCalledWith(null)
  })
})

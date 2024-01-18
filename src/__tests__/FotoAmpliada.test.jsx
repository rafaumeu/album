import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import FotoAmpliada from '../components/FotoAmpliada'

describe('<FotoAmpliada />', () => {
  const foto = {
    urls: { regular: 'url', small: 'url' },
    alt_description: 'desc',
  }
  it('renders without crashing', () => {
    render(<FotoAmpliada foto={foto} setFotoAmpliada={() => {}} />)
  })

  it('renders the backdrop and container', () => {
    const { container } = render(
      <FotoAmpliada foto={foto} setFotoAmpliada={() => {}} />
    )

    expect(container.firstChild).toHaveClass('foto-ampliada-backdrop')
    const containerElement = container.querySelector('.foto-ampliada-container')
    expect(containerElement).toHaveClass('foto-ampliada-container')
  })

  it('displays the image with correct src and alt attributes', () => {
    render(<FotoAmpliada foto={foto} setFotoAmpliada={() => {}} />)

    const image = screen.getByAltText(foto.alt_description)

    expect(image).toHaveAttribute('src', foto.urls.regular)
    expect(image).toHaveAttribute('alt', foto.alt_description)
  })
  it('throws a prop type error if foto prop is missing', () => {
    // Suppress prop type warnings for this test
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<FotoAmpliada setFotoAmpliada={() => {}} />)

    expect(spy).toHaveBeenCalled()

    // Restore the console.error function
    spy.mockRestore()
  })
  it('calls setFotoAmpliada when clicking on the backdrop', async () => {
    const setFotoAmpliadaMock = vi.fn()
    const { container } = render(
      <FotoAmpliada foto={foto} setFotoAmpliada={setFotoAmpliadaMock} />
    )

    const backdrop = container.querySelector('.foto-ampliada-backdrop')
    userEvent.click(backdrop)

    // Check the console for the output
    await waitFor(() => {
      expect(setFotoAmpliadaMock).toHaveBeenCalledTimes(1)
    })
  })
})

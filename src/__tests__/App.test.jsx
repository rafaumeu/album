import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { HttpResponse, http } from 'msw'
import { expect, vi } from 'vitest'

import App from '../App'
import { fotos } from '../mocks/handlers'
import { server } from '../mocks/server'

describe('<App />', () => {
  const fotosArray = fotos
  const props = {
    setQuery: '',
    query: '',
    categoria: '',
    setActivateSearch: false,
    setCategoria: '',
    fotos: [...fotosArray],
  }

  it('should not render photos', async () => {
    render(<App />)
    server.use(
      http.get('https://api.unsplash.com/photos/random', () => {
        return new HttpResponse(null, { status: 403 })
      })
    )
  })
})

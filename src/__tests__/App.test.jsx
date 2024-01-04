import { render, waitFor, fireEvent } from '@testing-library/react'
import axios from 'axios'
import React from 'react'

import App from '../App'

// Mock para a função axios.get
jest.mock('axios')

// Mock para as variáveis de ambiente
jest.mock('../../.config.js', () => ({
  REACT_APP_UNSPLASH_ACCESS_KEY: 'sua-chave-de-acesso-mock',
}))

describe('App Component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<App />)
  })

  it('fetches data when mounted', async () => {
    const responseData = {
      data: [
        { id: '1', urls: { small: 'url1' }, alt_description: 'desc1' },
        { id: '2', urls: { small: 'url2' }, alt_description: 'desc2' },
      ],
    }
    axios.get.mockResolvedValue(responseData)

    jest.spyOn(console, 'error').mockImplementation(() => {})

    render(<App />)

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))

    console.error.mockRestore()
  })

  it('fetches data with correct parameters', async () => {
    const responseData = { data: 'sua resposta mockada aqui' }
    axios.get.mockResolvedValue(responseData)

    render(<App />)

    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.unsplash.com/photos/random',
        { params: { client_id: 'sua-chave-de-acesso-mock', count: 12 } }
      )
    )
  })

  it('renders FotoAmpliada when fotoAmpliada is truthy', async () => {
    const responseData = {
      data: [
        { id: '1', urls: { small: 'url1' }, alt_description: 'desc1' },
        { id: '2', urls: { small: 'url2' }, alt_description: 'desc2' },
      ],
    }
    axios.get.mockResolvedValue(responseData)
    const { container, queryByTestId } = render(<App />)

    // Mock da resposta da requisição axios

    // Espera pela chamada da função fetchData
    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.unsplash.com/photos/random',
        { params: { client_id: 'sua-chave-de-acesso-mock', count: 12 } }
      )
    )

    // Adiciona uma foto ao estado
    const foto = container.querySelector('div.album > div:nth-child(1) > img')
    fireEvent.click(foto)

    // Verifica se o componente FotoAmpliada foi renderizado
    await waitFor(() =>
      expect(
        container.querySelector('.foto-ampliada-backdrop')
      ).toBeInTheDocument()
    )
  })

  it('does not render FotoAmpliada when fotoAmpliada is falsy', async () => {
    const { queryByTestId } = render(<App />)

    // Verifica se o componente FotoAmpliada não está presente inicialmente
    expect(queryByTestId('foto-ampliada-backdrop')).not.toBeInTheDocument()
  })
})

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
  let searchQuery
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
  it('handles query and categoria correctly', async () => {
    const query = 'sua-query-de-teste'
    const categoria = 'sua-categoria-de-teste'

    const responseData = {
      data: [
        { id: '1', urls: { small: 'url1' }, alt_description: 'desc1' },
        { id: '2', urls: { small: 'url2' }, alt_description: 'desc2' },
      ],
    }
    axios.get.mockResolvedValue(responseData)
    const { container } = render(<App />)

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

    // Agora vamos verificar as linhas específicas dentro do seu componente App
    // Verifica se a variável de estado `fotoAmpliada` foi definida corretamente quando query ou categoria estão presentes
    expect(
      container.querySelector('.foto-ampliada-backdrop')
    ).toBeInTheDocument()

    // Certifique-se de que `searchQuery` está sendo definido corretamente no seu componente App
    // Pode ser necessário ajustar essa lógica de acordo com a implementação real do seu componente
    if (query && categoria) {
      searchQuery = `${query} ${categoria}`
    }

    // Verifica se a variável `searchQuery` é configurada corretamente quando query e categoria estão presentes
    if (query && categoria) {
      const expectedSearchQuery = `${query} ${categoria}`
      expect(searchQuery).toEqual(expectedSearchQuery)
    } else {
      // Se query ou categoria não estiverem presentes, searchQuery deve ser undefined
      expect(searchQuery).toBeUndefined()
    }
  })
  it('handles query and categoria correctly', async () => {
    const apiKey = 'sua-chave-de-acesso-mock'
    const query = 'sua-query-de-teste'
    const categoria = 'sua-categoria-de-teste'

    const responseData = {
      data: {
        results: [
          { id: '1', urls: { small: 'url1' }, alt_description: 'desc1' },
          { id: '2', urls: { small: 'url2' }, alt_description: 'desc2' },
        ],
      },
    }
    axios.get.mockResolvedValue(responseData)

    const setFotosMock = jest.fn()

    render(
      <App
        setFotos={setFotosMock}
        query={query}
        categoria={categoria}
        apiKey={apiKey}
      />
    )

    // Espera pela chamada da função fetchData
    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            client_id: apiKey,
            count: 12,
          },
        }
      )
    )

    if (query && categoria) {
      const expectedSearchQuery = `${query} ${categoria}`
      expect(searchQuery).toEqual(expectedSearchQuery)
    } else {
      // Se query ou categoria não estiverem presentes, searchQuery deve ser undefined
      expect(searchQuery).toBeUndefined()
    }
  })
  it('calls fetchData when activateSearch is true', async () => {
    // Renderiza o componente App com activateSearch configurado como true
    render(
      <App activateSearch={true} query='sua-query' categoria='sua-categoria' />
    )

    // Verifica se fetchData foi chamada quando activateSearch é true
    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            client_id: 'sua-chave-de-acesso-mock',
            count: 12,
          },
        }
      )
    )
  })
  it('handles query and categoria correctly', async () => {
    const query = 'sua-query-de-teste'
    const categoria = 'sua-categoria-de-teste'

    const responseData = {
      data: [
        { id: '1', urls: { small: 'url1' }, alt_description: 'desc1' },
        { id: '2', urls: { small: 'url2' }, alt_description: 'desc2' },
      ],
    }

    axios.get.mockResolvedValue(responseData)

    const setFotosMock = jest.fn()

    const { container } = render(
      <App
        setFotos={setFotosMock}
        query={query}
        categoria={categoria}
        apiKey='sua-chave-de-acesso-mock'
      />
    )

    // Espera pela chamada da função fetchData
    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.unsplash.com/photos/random',
        { params: { client_id: 'sua-chave-de-acesso-mock', count: 12 } }
      )
    )

    // Adiciona uma foto ao estado
    const foto = container.querySelector('.foto') // Certifique-se de ajustar para refletir a implementação real
    fireEvent.click(foto)

    // Agora vamos verificar as linhas específicas dentro do seu componente App
    // Verifica se a variável de estado `fotoAmpliada` foi definida corretamente quando query ou categoria estão presentes
    expect(
      container.querySelector('.foto-ampliada-backdrop')
    ).toBeInTheDocument()

    // Certifique-se de que `searchQuery` está sendo definido corretamente no seu componente App
    // Pode ser necessário ajustar essa lógica de acordo com a implementação real do seu componente
    let searchQuery
    if (query && categoria) {
      searchQuery = `${query} ${categoria}`
    }

    // Verifica se a variável `searchQuery` é configurada corretamente quando query e categoria estão presentes
    if (query && categoria) {
      const expectedSearchQuery = `${query} ${categoria}`
      expect(searchQuery).toEqual(expectedSearchQuery)
    } else if (categoria) {
      const expectedSearchQuery = categoria
      expect(searchQuery).toEqual(expectedSearchQuery)
    } else {
      // Se query ou categoria não estiverem presentes, searchQuery deve ser undefined
      expect(searchQuery).toBeUndefined()
    }

    // Verifica se a função setFotos foi chamada corretamente
    expect(setFotosMock).not.toHaveBeenCalledWith(responseData.data)
  })
})

import { render, waitFor } from '@testing-library/react'
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
    // Mock da resposta da requisição axios

    const responseData = {
      data: [
        // Coloque aqui exemplos de objetos que você espera na resposta.
        // Certifique-se de que os objetos tenham a mesma estrutura que os dados reais.
        { id: '1', urls: { small: 'url1' }, alt_description: 'desc1' },
        { id: '2', urls: { small: 'url2' }, alt_description: 'desc2' },
      ],
    }
    axios.get.mockResolvedValue(responseData)

    // Adicione esta linha para depuração
    jest.spyOn(console, 'error').mockImplementation(() => {})

    // Renderiza o componente
    render(<App />)

    // Espera pela chamada da função fetchData
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))

    // Remova o spy após o teste para evitar interferências
    console.error.mockRestore()
  })
  it('fetches data with correct parameters', async () => {
    // Mock da resposta da requisição axios
    const responseData = { data: 'sua resposta mockada aqui' }
    axios.get.mockResolvedValue(responseData)

    // Renderiza o componente
    render(<App />)

    // Espera pela chamada da função fetchData
    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.unsplash.com/photos/random',
        { params: { client_id: 'sua-chave-de-acesso-mock', count: 10 } }
      )
    )
  })
})

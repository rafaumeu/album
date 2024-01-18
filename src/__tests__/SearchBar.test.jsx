import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { mount } from 'vitest'

import SearchBar from '../components/SearchBar'

describe('<SearchBar />', () => {
  it('should renders without crashing', () => {
    const { debug, container } = render(
      <SearchBar
        setActivateSearch={() => {}}
        setCategoria={() => {}}
        setQuery={() => {}}
      />
    )
    const inputElement = screen.getByPlaceholderText('Pesquisar fotos...')
    const buttonElement = screen.getByText(/pesquisar/i)
    const selectElement = container.querySelector('select')
    expect(inputElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
    expect(selectElement).toBeInTheDocument()
  })

  it('should trigger callback functions on user interaction', async () => {
    const setQueryMock = vi.fn()
    const setActivateSearchMock = vi.fn()
    const setCategoriasMock = vi.fn()
    render(
      <SearchBar
        setQuery={setQueryMock}
        setActivateSearch={setActivateSearchMock}
        setCategoria={setCategoriasMock}
      />
    )

    const inputElement = screen.getByPlaceholderText('Pesquisar fotos...')
    const buttonElement = screen.getByText(/pesquisar/i)

    // Simula a mudança no valor do input
    fireEvent.change(inputElement, { target: { value: 'pesquisa' } })

    // Simula o clique no botão
    fireEvent.click(buttonElement)

    // Verifica se o estado local (localQuery) foi atualizado corretamente
    expect(inputElement.value).toBe('pesquisa')
  })
  it('should trigger callback functions on user interaction', async () => {
    const setQueryMock = vi.fn()
    const setActivateSearchMock = vi.fn()
    const setCategoriasMock = vi.fn()

    const { container } = render(
      <SearchBar
        setQuery={setQueryMock}
        setActivateSearch={setActivateSearchMock}
        setCategoria={setCategoriasMock}
      />
    )

    const inputElement = screen.getByPlaceholderText('Pesquisar fotos...')
    const buttonElement = screen.getByText(/pesquisar/i)
    const selectElement = container.querySelector('select') // ou ajuste conforme seu código

    // Simula a mudança no valor do input
    fireEvent.change(inputElement, { target: { value: 'pesquisa' } })

    // Simula o clique no botão
    fireEvent.click(buttonElement)

    // Aguarda a execução das funções assíncronas

    expect(inputElement.value).toBe('pesquisa')

    // Simula a mudança na seleção da categoria
    fireEvent.change(selectElement, { target: { value: 'Natureza' } })

    // Aguarda a execução das funções assíncronas após a mudança na categoria
    await waitFor(() => {
      // Verifica se setCategoria foi chamado corretamente
      expect(setCategoriasMock).toHaveBeenCalledWith('Natureza')
      expect(setActivateSearchMock).toHaveBeenCalledWith(true)
    })
  })
  it('should to be matches snapshot', async () => {
    const setQueryMock = vi.fn()
    const setActivateSearchMock = vi.fn()
    const setCategoriasMock = vi.fn()

    const { container, debug } = render(
      <SearchBar
        setQuery={setQueryMock}
        setActivateSearch={setActivateSearchMock}
        setCategoria={setCategoriasMock}
      />
    )
    const inputElement = screen.getByPlaceholderText('Pesquisar fotos...')
    const buttonElement = screen.getByText(/pesquisar/i)
    const selectElement = container.querySelector('select') // ou ajuste conforme seu código

    // Simula a mudança no valor do input
    fireEvent.change(inputElement, { target: { value: 'pesquisa' } })

    // Simula o clique no botão
    fireEvent.click(buttonElement)

    // Aguarda a execução das funções assíncronas

    expect(inputElement.value).toBe('pesquisa')

    // Simula a mudança na seleção da categoria
    fireEvent.change(selectElement, { target: { value: 'Natureza' } })
    expect(container).toMatchSnapshot()
    screen.debug()
  })
})

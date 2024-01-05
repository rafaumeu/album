import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import SearchBar from '../components/SearchBar'

describe('SearchBar', () => {
  it('renders without crashing', () => {
    render(<SearchBar />)
  })
  it('calls setQuery with the correct value on input change', () => {
    // Mock da função setQuery
    const setQueryMock = jest.fn()

    // Renderiza o componente SearchBar com a função setQuery mockada
    const { getByPlaceholderText } = render(
      <SearchBar setQuery={setQueryMock} />
    )

    // Obtém o input pelo placeholder e simula a mudança de valor
    const inputElement = getByPlaceholderText('Pesquisar fotos...')
    fireEvent.change(inputElement, { target: { value: 'nova-pesquisa' } })

    // Verifica se a função setQuery foi chamada corretamente
    expect(setQueryMock).toHaveBeenCalledWith('nova-pesquisa')
  })
  it('calls setActivateSearch with true on button click', () => {
    // Mock da função setActivateSearch
    const setActivateSearchMock = jest.fn()

    // Renderiza o componente SearchBar com a função setActivateSearch mockada
    const { getByText } = render(
      <SearchBar setActivateSearch={setActivateSearchMock} />
    )

    // Obtém o botão pelo texto e simula o clique
    const buttonElement = getByText('Pesquisar')
    fireEvent.click(buttonElement)

    // Verifica se a função setActivateSearch foi chamada com true
    expect(setActivateSearchMock).toHaveBeenCalledWith(true)
  })
  it('calls setCategoria and setActivateSearch on dropdown selection', () => {
    // Mock das funções setCategoria e setActivateSearch
    const setCategoriaMock = jest.fn()
    const setActivateSearchMock = jest.fn()

    // Renderiza o componente SearchBar com as funções mockadas
    const { getByDisplayValue } = render(
      <SearchBar
        setCategoria={setCategoriaMock}
        setActivateSearch={setActivateSearchMock}
      />
    )

    // Obtém o elemento do dropdown e simula a seleção de uma opção
    const selectElement = getByDisplayValue('Natureza')
    fireEvent.change(selectElement, { target: { value: 'Pessoas' } })

    // Verifica se as funções setCategoria e setActivateSearch foram chamadas corretamente
    expect(setCategoriaMock).toHaveBeenCalledWith('Pessoas')
    expect(setActivateSearchMock).toHaveBeenCalledWith(true)
  })
})

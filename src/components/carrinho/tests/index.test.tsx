import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from '../.';
import { CarrinhoContext } from '@/app/contexts/carrinho';
import { AppContext } from '@/app/contexts/api_data';

// Mocking useContext hook
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('Page component', () => {
  beforeEach(() => {
    (React.useContext as jest.Mock).mockReset();
  });

  test('renders Page component', () => {
    // Mocking context values
    const mockSetCarrinhoAberto = jest.fn();
    (React.useContext as jest.Mock).mockReturnValueOnce({
      carrinhoAberto: false,
      setCarrinhoAberto: mockSetCarrinhoAberto,
    });
    (React.useContext as jest.Mock).mockReturnValueOnce({
      produtos: [],
      carrinho: [],
      adicionarAoCarrinho: jest.fn(),
      removerDoCarrinho: jest.fn(),
    });

    render(
      <CarrinhoContext.Provider value={{ carrinhoAberto: false, setCarrinhoAberto: mockSetCarrinhoAberto }}>
        <Page />
      </CarrinhoContext.Provider>
    );

    // Verifica se o texto "Carrinho de compras" está presente
    expect(screen.getByText(/Carrinho de compras/i)).toBeDefined();
    // Verifica se o texto "Total:" está presente
    expect(screen.getByText(/Total:/i)).toBeDefined();
    // Verifica se o botão "Finalizar Compra" está presente
    expect(screen.getByRole('button', { name: /finalizar compra/i })).toBeDefined();
  });

});

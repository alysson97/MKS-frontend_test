import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from './..';

// Mock para o hook useContext
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('Page component', () => {
  beforeEach(() => {
    (React.useContext as jest.Mock).mockReset();
  });

  /* test('renders Page component', () => {
    // Mocking context values
    (React.useContext as jest.Mock).mockReturnValueOnce({
      setCarrinhoAberto: jest.fn(),
    });
    (React.useContext as jest.Mock).mockReturnValueOnce({
      produtos: [],
      carrinho: [],
      adicionarAoCarrinho: jest.fn(),
      removerDoCarrinho: jest.fn(),
    });

    render(<Page />);

    const mksSistemasElement = screen.getByText(/MKS Sistemas/i);
    const carrinhoImageElement = screen.getByAltText(/carrinho/i);

    expect(mksSistemasElement).toBeDefined();
    expect(carrinhoImageElement).toBeDefined();
  }); */

  test('clicking carrinho button calls setCarrinhoAberto', () => {
    const mockSetCarrinhoAberto = jest.fn();
    (React.useContext as jest.Mock).mockReturnValueOnce({
      setCarrinhoAberto: mockSetCarrinhoAberto,
    });
    (React.useContext as jest.Mock).mockReturnValueOnce({
      produtos: [],
      carrinho: [],
      adicionarAoCarrinho: jest.fn(),
      removerDoCarrinho: jest.fn(),
    });

    render(<Page />);

    fireEvent.click(screen.getByAltText(/carrinho/i));

    expect(mockSetCarrinhoAberto).toHaveBeenCalledWith(false);
  });
});

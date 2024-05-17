import { render } from '@testing-library/react';
import Page from '..';
import { AppContext } from "@/app/contexts/api_data";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(() => ({
    produtos: [{ id: 1, name: 'Iphone 11 128 GB', price: 5000.00, photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp', description: 'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.' }],
    carrinho: [],
    adicionarAoCarrinho: jest.fn(),
    removerDoCarrinho: jest.fn()
  }))
}));

describe('Page Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
"use client";

import { createContext, useState, useEffect } from "react";

type Produto = {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: number;
  // Adicione outras propriedades conforme necessário
};

type AppContextType = {
  produtos: Produto[];
  carrinho: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (produto: Produto) => void;
};

type AppProps = {
  children: React.ReactNode;
};

export const AppContext = createContext<AppContextType>({
  produtos: [],
  carrinho: [],
  adicionarAoCarrinho: () => {},
  removerDoCarrinho: () => {},
});



const ApiDataProvider:  React.FC<AppProps> = ({children})  => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const response = await  fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=15&sortBy=id&orderBy=ASC", { cache: "no-store" });
      const data = await response.json();
      setProdutos(data.products);
    };
    fetchProdutos();
  }, []);

  const adicionarAoCarrinho = (produto: Produto) => {
    if(!carrinho.find(item=>item.id == produto.id))
      setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (produto: Produto) => {
    setCarrinho(carrinho.filter(item => item.id !== produto.id));
  };

  return (
    <AppContext.Provider value={{ produtos, carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </AppContext.Provider>
  );
};

export default ApiDataProvider;

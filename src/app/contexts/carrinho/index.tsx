'use client'
 
import { createContext, useState } from 'react';


type CarrinhoContextType = {
  carrinhoAberto: boolean;
  setCarrinhoAberto: (aberto: boolean) => void;
};
 
export const CarrinhoContext = createContext<CarrinhoContextType>({
  carrinhoAberto: true,
  setCarrinhoAberto: () => {}
});
 
export default function CarrinhoStateProvider({
  children,
}: {
  children: React.ReactNode
}) {

  const [carrinhoAberto, setCarrinhoAberto] = useState(true);

  const [ itemCount, setCount ] = useState(0);


  return <CarrinhoContext.Provider value={{carrinhoAberto, setCarrinhoAberto }}>{children}</CarrinhoContext.Provider>
}
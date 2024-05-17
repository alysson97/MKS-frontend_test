"use client";
import Image from "next/image";
import "./index.css";
import { useContext, useState, useEffect } from "react";
import { CarrinhoContext } from "@/app/contexts/carrinho";
import { AppContext } from "@/app/contexts/api_data";

interface CartItem {
  id: number;
  name: string;
  photo: string;
  price: number;
}

interface CarrinhoContextType {
  carrinhoAberto: boolean;
  setCarrinhoAberto: (value: boolean) => void;
}

interface AppContextType {
  produtos: CartItem[];
  carrinho: CartItem[];
  adicionarAoCarrinho: (item: CartItem) => void;
  removerDoCarrinho: (item: CartItem) => void;
}

export default function Page() {
  const { carrinhoAberto, setCarrinhoAberto } = useContext(CarrinhoContext) as CarrinhoContextType;
  const { produtos, carrinho, adicionarAoCarrinho, removerDoCarrinho } = useContext(AppContext);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const newTotalPrice = carrinho.reduce((total, item) => {
      const quantity = quantities[item.id] || 1;
      return total + quantity * item.price;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [carrinho, quantities]);

  const handleQuantityChange = (id: number, amount: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, (prevQuantities[id] || 1) + amount),
    }));
  };

  return (
    <nav
      className={`carrinhoNav md:absolute sticky flex flex-col justify-between lg:h-full  overflow-y-auto ${carrinhoAberto ? "hidden" : ""}`}
    >
      <div className="topItems-container">
        <div className="carrinhoRow flex justify-between pt-5 mb-5">
          <h1 className="ml-5">Carrinho de compras</h1>
          <span className="mr-5 rounded-2xl bg-black p-1 px-2 text-sm">
            <button onClick={() => setCarrinhoAberto(true)}>X</button>
          </span>
        </div>
        <div className="itemCard-container ml-4 flex flex-col">
          {carrinho.map((item) => (
            <div key={item.id} className="itemCard bg-white text-black pl-3 mr-4 mb-4 rounded">
              <div className="carrinhoRow flex justify-between pt-5 mb-5">
                <img src={item.photo} alt={item.name} className="max-w-36" />
                <span className="flex mr-5 rounded-2xl bg-black p-1 px-2 text-sm max-h-7 text-white">
                  <button onClick={() => removerDoCarrinho(item)}>X</button>
                </span>
              </div>
              <p>{item.name}</p>
              <div className="qtdInput">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <input
                  className="shadow bg-slate-100 rounded"
                  min={1}
                  value={quantities[item.id] || 1}
                  type="number"
                  readOnly
                />
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <p>R$ {item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bottomItems-container">
        <div className="totalRow flex justify-between">
          <span>Total: R$ {totalPrice}</span>
        </div>
        <button className="w-full py-2 bg-black">Finalizar Compra</button>
      </div>
    </nav>
  );
}

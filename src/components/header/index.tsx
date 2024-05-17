"use client"
import Image from "next/image"
import carrinhoImg from "./../../../../public/img/carrinho.png";
import { CarrinhoContext } from "@/app/contexts/carrinho";
import { useContext } from "react";
import { AppContext } from "@/app/contexts/api_data";


export default function Page(){
  const { setCarrinhoAberto } = useContext(CarrinhoContext);
  const { produtos, carrinho, adicionarAoCarrinho, removerDoCarrinho } = useContext(AppContext);
  let carrinhoQtd:number=0;

  carrinho.forEach(()=>{
    carrinhoQtd++;
  })

  return(
    <>
      <header className="flex justify-between py-5 bg-blue-700 text-slate-300">
        <div className="MKS-sistemas ml-6">
          <h1 className="pr-2 text-white text-3xl inline">MKS</h1>
          <span>Sistemas</span>
        </div>
        <div className="carrinho  mr-6">
          <button className="flex justify-between bg-white rounded py-1 px-4 mr-4"
            onClick={()=>setCarrinhoAberto(false)}
          >
            {/* <Image src={carrinhoImg} alt="carrinho" fetchPriority="auto"/> */}
            <img src="/img/carrinho.png" alt="carrinho"/>
               {carrinhoQtd}
          </button>
        </div>
        
      </header>
    </>
  )
}
"use client"
import { useContext } from "react";
import { AppContext } from "@/app/contexts/api_data";
import "./index.css";



export default function Page({data}:any){
  const {produtos, carrinho, adicionarAoCarrinho, removerDoCarrinho} = useContext(AppContext);


  console.log(produtos);
 

  return(
    <div className="produtos-container flex justify-center">
      <div className="produtos grid place-content-center lg:grid-cols-4 md:grid-cols-2">
        {produtos.map((item:any) =>(
          <div key={item.id} className="card m-2 rounded-xl shadow-lg flex flex-col justify-between">
            <img className="cardImage" src={`${item.photo}`} alt={item.brand}/>
            <div className="cardText px-2 ">
              <div className="itemPrice flex justify-between">
                <p className="itemName pr-1">{item.name}</p>
                <p className="price p-1 rounded">R${item.price}</p>
              </div>
              
              <p className="description my-2">{item.description}</p>
              
            </div> 
            <button className="comprarButton py-1 rounded flex justify-center self-end"
              onClick={()=>{adicionarAoCarrinho(item)}}
            >
              <img src="/img/comprar.png" alt="" className="pr-1 mt-1" />
                Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
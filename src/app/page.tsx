import Items from "@/components/items";
import Header from "@/components/header";
import Carrinho from "@/components/carrinho";


export default function Home() {

  
  return (
    <main className="min-h-screen min-w-screen">
      <div className="relative">
        <Header/>
        <Carrinho/>
        <Items/>
      </div> 
    </main>
  );
}

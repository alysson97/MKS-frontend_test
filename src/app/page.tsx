import Image from "next/image";
import carrinho from "./../../public/img/carrinho.png";
import Items from "@/app/components/items";


async function getData() {
  const res = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=15&sortBy=id&orderBy=ASC", { cache: "no-store" });


  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="min-h-screen min-w-screen">
      <header className="flex justify-between py-5 bg-blue-700 text-slate-300">
        <div className="MKS-sistemas ml-6">
          <h1 className="pr-2 text-white text-3xl inline">MKS</h1>
          <span>Sistemas</span>
        </div>
        <div className="carrinho  mr-6">
          <button className="flex justify-between bg-white rounded py-1 px-4 mr-4">
            <Image src={carrinho} alt="carrinho"/>
            0
          </button>
        </div>
      </header>

      <Items data={data}/>
    </main>
  );
}

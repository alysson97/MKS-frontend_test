import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CarrinhoStateProvider from "./contexts/carrinho";
import ApiDataProvider from "./contexts/api_data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste MKS",
  description: "Desafio frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApiDataProvider>
          <CarrinhoStateProvider>{children}</CarrinhoStateProvider>
        </ApiDataProvider> 
      </body>
    </html>
  );
}

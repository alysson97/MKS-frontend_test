Claro! Aqui está a versão atualizada do README com emojis e sem a seção de licença:

---

# 🛒 MKS Frontend Test

![Project Logo](https://via.placeholder.com/150)

## 🚀 Desafio para vaga de frontend

## 📑 Índice
- [📋 Sobre](#-sobre)
- [💻 Tecnologias](#-tecnologias)
- [🔧 Instalação](#-instalação)
- [🚀 Uso](#-uso)
- [🌐 Deploy](#-deploy)
- [🛠️ Metodologia](#-metodologia)
- [✅ Testes](#-testes)
- [🤝 Contribuição](#-contribuição)

## 📋 Sobre
Este projeto é um desafio para uma vaga de desenvolvedor frontend, utilizando Next.js e Tailwind CSS.

## 💻 Tecnologias
- ⚛️ Next.js
- ⚛️ React
- 🟦 TypeScript
- 🎨 Tailwind CSS

## 🔧 Instalação
Clone o repositório e instale as dependências:
```bash
git clone https://github.com/alysson97/MKS-frontend_test.git
cd MKS-frontend_test
npm install
```

## 🚀 Uso
Execute o servidor de desenvolvimento:
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## 🌐 Deploy
Este projeto pode ser facilmente implantado no Vercel:
1. Acesse o [Vercel](https://vercel.com/).
2. Clique em "New Project" e selecione o repositório.
3. Siga as instruções para configurar e implantar.

## 🛠️ Metodologia
### Componentes
O projeto segue uma arquitetura de componentes reutilizáveis, cada um encapsulando sua própria lógica e estilo. Os principais componentes utilizados incluem:

- `Header`: Responsável pelo cabeçalho da aplicação, possui um botão que utiliza o contexto para abrir o carrinho.
- `Carrinho`: Utiliza o contexto para abrir/fechar o carrinho e exibir os itens adicionados.
- `Items`: Usa os dados do contexto para exibir os itens em cards.

### Estrutura do Projeto
- **src/components/items**: Exibe os dados dos itens em cards usando o contexto.
- **src/components/carrinho**: Exibe o carrinho e seus itens usando o contexto.
- **src/components/header**: Contém um botão que usa o contexto para abrir o carrinho.
- **src/app/page.tsx**: Importa e organiza os componentes `items`, `carrinho` e `header`.
- **src/app/contexts/api_data**: Importa dados de uma API e os expõe via `createContext` para toda a aplicação.
- **src/app/contexts/carrinho**: Usa `createContext` para compartilhar os dados dos itens no carrinho e seu estado (aberto/fechado).

### Hooks
Os hooks são utilizados para gerenciar o estado e os efeitos colaterais na aplicação. Os principais hooks incluem:
- `useState`: Para gerenciar estados locais.
- `useEffect`: Para realizar efeitos colaterais, como chamadas à API.

### Estilização
A estilização é feita utilizando Tailwind CSS, facilitando a aplicação de estilos de forma rápida e consistente.

## ✅ Testes
Os testes são realizados utilizando a biblioteca Jest junto com React Testing Library para garantir que os componentes estejam funcionando conforme o esperado.

### Estrutura de Testes
- **src/components/items/tests**: Testa o componente `items`.
- **src/components/carrinho/tests**: Testa o componente `carrinho`.
- **src/components/header/tests**: Testa o componente `header`.

### Executar Testes
Para rodar os testes, utilize o comando:
```bash
npm run test
```

Os testes incluem:
- 🧪 Testes unitários para componentes individuais.

### Exemplos de Testes
- Teste do componente `Header` para verificar se ele renderiza corretamente e se o botão de abrir o carrinho funciona.
- Teste do componente `Carrinho` para verificar se exibe os itens adicionados corretamente.
- Teste do componente `Items` para verificar se exibe os dados dos itens em cards corretamente.


---

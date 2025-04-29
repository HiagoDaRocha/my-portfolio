# My Portfolio

Este é um projeto de portfólio pessoal desenvolvido com **React** e **Vite**, utilizando o **Material UI (MUI)** para os componentes de interface, além de suporte a **TypeScript** e linting com **ESLint**.

## 🧰 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [MUI (Material UI)](https://mui.com/)
- [Emotion (Styled Components)](https://emotion.sh/docs/introduction)
- [ESLint](https://eslint.org/)

## 📂 Scripts disponíveis

No diretório do projeto, você pode rodar:

### `npm run dev`

Inicia o servidor de desenvolvimento com **Vite**. Ele recompila automaticamente quando arquivos são modificados.

> Acesse o projeto geralmente em `http://localhost:5173`

### `npm run build`

Faz a **construção (build)** do projeto para produção. Esse comando:
1. Compila o código TypeScript (`tsc -b`)
2. Gera os arquivos otimizados de produção com o Vite (`vite build`)

Os arquivos gerados estarão na pasta `dist/`, prontos para serem hospedados em um servidor.

### `npm run preview`

Pré-visualiza localmente a versão de produção gerada com o comando `build`.

### `npm run lint`

Roda o **ESLint** para analisar o código e garantir que ele segue boas práticas e o estilo definido.

## 📦 Instalação

Clone este repositório e instale as dependências:

```bash
npm install
```

## 🚀 Comece a desenvolver

```bash
npm run dev
```

## 🛠️ Construa para produção

```bash
npm run build
```

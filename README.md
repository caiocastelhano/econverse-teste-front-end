# Econverse Front-End Challenge

Este projeto é parte do desafio técnico proposto pela Econverse. Ele consiste na construção de uma vitrine com produtos, categorização via abas, layout responsivo e componentes reutilizáveis em React + TypeScript + SCSS.

## 🛠️ Tecnologias usadas

- React
- TypeScript
- Vite
- SCSS Modules

## 📦 Instalação e execução

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Rode o projeto em modo desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Rodando testes

> ⚠️ Este projeto não inclui testes automatizados por padrão, mas você pode adicionar Jest, React Testing Library ou Vitest conforme necessário.

---

## 🧱 Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (Card, Navbar, Footer, etc.)
├── pages/            # Páginas (Home)
├── styles/           # Estilos globais ou utilitários
├── types/            # Tipagens compartilhadas (TypeScript)
├── utils/            # Funções auxiliares (formatadores, normalizadores)
```

---

## 📂 Dados

Os produtos são consumidos dinamicamente via `fetch` no seguinte endpoint:

```
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

---

## ✍️ Autor

Caio Castelhano  
[https://caiocastelhano.com.br](https://caiocastelhano.com.br)
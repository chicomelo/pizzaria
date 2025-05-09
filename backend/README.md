
# 🍕 Backend - Pizzaria

Este é o backend do projeto **Pizzaria**, desenvolvido com **Node.js**, **Express** e **Prisma**, responsável por gerenciar usuários, categorias, produtos e pedidos.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **Prisma**: ORM para interação com o banco de dados.
- **SQLite**: Banco de dados leve e simples.
- **JWT**: Autenticação baseada em tokens.
- **bcrypt**: Criptografia de senhas.
- **Multer**: Upload de arquivos.
- **dotenv**: Gerenciamento de variáveis de ambiente.

## 📁 Estrutura do Projeto

```
backend/
├── prisma/
│   ├── schema.prisma
│   └── ...
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   └── ...
├── .env
├── package.json
└── ...
```

## ⚙️ Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/chicomelo/pizzaria.git
   cd pizzaria/backend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="sua_chave_secreta"
   ```

4. **Execute as migrations do Prisma:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Inicie o servidor:**

   ```bash
   npm run dev
   ```

   O servidor estará disponível em `http://localhost:3333`.

## 📦 Endpoints da API

### 🔐 Autenticação

- **POST /session**: Login de usuário.
- **POST /user**: Cadastro de novo usuário.
- **GET /me**: Retorna dados do usuário autenticado.

### 📁 Categorias

- **POST /category**: Criação de nova categoria.
- **GET /category**: Lista todas as categorias.

### 🍕 Produtos

- **POST /product**: Criação de novo produto com upload de imagem.
- **GET /category/product**: Lista produtos de uma categoria específica.
- **DELETE /product**: Remove um produto.

### 🧾 Pedidos

- **POST /order**: Criação de novo pedido.
- **DELETE /order**: Remove um pedido.
- **POST /order/add**: Adiciona item ao pedido.
- **DELETE /order/remove**: Remove item do pedido.
- **PUT /order/send**: Envia pedido para produção.
- **GET /orders**: Lista todos os pedidos em andamento.
- **GET /order/detail**: Detalhes de um pedido específico.
- **PUT /order/finish**: Finaliza um pedido.

## 🛡️ Autenticação

As rotas protegidas requerem o envio do token JWT no header da requisição:

```
Authorization: Bearer <token>
```

## 🖼️ Upload de Imagens

As imagens dos produtos são armazenadas localmente na pasta `tmp`.

## 📄 Licença

Este projeto está licenciado sob a MIT License.

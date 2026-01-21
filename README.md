# POC-NEST - API REST de Produtos

API REST simples desenvolvida em NestJS seguindo o padrão MVC para gerenciamento de produtos.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** (geralmente vem junto com o Node.js)

Para verificar se você tem o Node.js instalado, execute:

```bash
node --version
npm --version
```

## Instalação

1. Clone o repositório ou navegue até a pasta do projeto:

```bash
cd POC-NEST
```

2. Instale as dependências:

```bash
npm install
```

## Executando o projeto

### Modo desenvolvimento (com hot-reload)

```bash
npm run start:dev
```

### Modo produção

```bash
npm run build
npm run start:prod
```

A API estará disponível em: **http://localhost:3000**

## Endpoints da API

### Products

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/products` | Lista todos os produtos |
| GET | `/products/:id` | Busca um produto por ID |
| POST | `/products` | Cria um novo produto |
| PUT | `/products/:id` | Atualiza um produto |
| DELETE | `/products/:id` | Remove um produto |

### Exemplos de uso

#### Listar todos os produtos

```bash
curl http://localhost:3000/products
```

#### Buscar produto por ID

```bash
curl http://localhost:3000/products/1
```

#### Criar novo produto

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Monitor LG",
    "description": "Monitor LG 27 polegadas 4K",
    "price": 1500.00,
    "quantity": 5
  }'
```

#### Atualizar produto

```bash
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 3200.00,
    "quantity": 8
  }'
```

#### Remover produto

```bash
curl -X DELETE http://localhost:3000/products/1
```

## Estrutura do Projeto

```
src/
├── products/
│   ├── dto/
│   │   ├── create-product.dto.ts    # DTO para criação
│   │   └── update-product.dto.ts    # DTO para atualização
│   ├── entities/
│   │   └── product.entity.ts        # Model/Entidade
│   ├── mock/
│   │   └── products.mock.ts         # Dados mockados
│   ├── products.controller.ts       # Controller (rotas)
│   ├── products.module.ts           # Módulo
│   └── products.service.ts          # Service (regras de negócio)
├── app.module.ts
├── app.controller.ts
├── app.service.ts
└── main.ts
```

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run start` | Inicia a aplicação |
| `npm run start:dev` | Inicia em modo desenvolvimento com hot-reload |
| `npm run start:prod` | Inicia em modo produção |
| `npm run build` | Compila o projeto |
| `npm run test` | Executa os testes unitários |
| `npm run test:e2e` | Executa os testes end-to-end |
| `npm run lint` | Executa o linter |

## Tecnologias utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js progressivo
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript tipado

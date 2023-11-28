# PRODUCT-MANAGER
Gerenciador de produtos - CRUD

# Gerenciador de Produtos

Esta é uma aplicação de controle administrativo para uma papelaria, projetada para gerenciar produtos, estoque interno e operações básicas de CRUD (Criar, Alterar, Deletar e Ler).

## Funcionalidades Principais

- **Cadastro de Produtos:** Adicione novos produtos ao sistema, especificando detalhes como nome, quantidade em estoque, preço, etc.

- **Visualização de Produtos:** Veja uma lista completa de todos os produtos registrados no sistema, com detalhes importantes como nome, quantidade em estoque e preço.

- **Atualização de Produtos:** Edite informações sobre produtos existentes, mantendo seu banco de dados atualizado com as últimas alterações.

- **Remoção de Produtos:** Remova produtos do sistema quando necessário, mantendo o controle sobre os itens em estoque.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript do lado do servidor.
- **Express.js:** Framework web para construir APIs RESTful.
- **PostgreSQL:** Banco de dados relacional para armazenar informações sobre produtos.
- **Sequelize:** ORM (Object-Relational Mapping) para interagir com o banco de dados de forma simplificada.
- **EJS (Embedded JavaScript):** View engine para renderizar as páginas HTML dinamicamente.
- **CSS, Bootstrap (opcional):** Para o estilo da interface do usuário.

## Como Usar

Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir.

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/WilliamsWallace-dev/PRODUCT-MANAGER.git
   cd PRODUCT-MANAGER
2. **Instale as Dependências:**
   ```bash
   npm install
3. **Configuração do Banco de Dados:**
   ```bash
   NODE_ENV=development
   PORT=3000
   
   # Configurações do PostgreSQL
   POSTGRES_HOST=localhost
   POSTGRES_DATABASE=bookstore_development
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=wallace357
- Certifique-se de adaptar as informações do banco de dados de acordo com a sua configuração específica. As variáveis fornecidas são exemplos e podem não refletir as configurações reais do seu ambiente.
4. **Criação o Banco de Dados:**
   - Execute os comandos Sequelize para criar o banco de dados e aplicar as migrações:
   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
5. **Inicie a Aplicação:**
   ```bash
   npm run dev
6. **Acesse a Aplicação:**
   ```bash
   Abra o navegador e acesse http://localhost:3000.

## Estrutura do Projeto

- **src/: ** Contém o código-fonte da aplicação.
- **migrations/:** Armazena arquivos de migração para configurar o banco de dados.

## Contribuição

Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Se encontrar problemas ou tiver sugestões, abra uma issue ou envie um pull request.
**Nota:** Esta aplicação foi desenvolvida como parte do projeto da papelaria e não é destinada para uso em transações de compra. É estritamente para fins administrativos e controle de estoque interno.

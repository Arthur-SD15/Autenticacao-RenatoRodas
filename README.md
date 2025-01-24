<h1 align="center">
  Projeto Autenticação | Client e Server
</h1>

<p align="center">
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Preview">Visualizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Pré-requesitos">Pré-requesitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Executar Projeto">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Banco de Dados">Banco de Dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Aluno">Aluno</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Professores">Professores</a>
</p>

<p align="center">
  <img src="https://github.com/Arthur-SD15/PTAS-2-Cadastro-Pessoas/raw/main/logo_ifms.png" width="300px">
</p>

## 💻 Projeto

Este projeto abrange tanto a parte do cliente quanto do servidor, configurando-se como um sistema de autenticação de usuários.

Para realizar a autenticação, o usuário deve ter um cadastro prévio, e essas informações devem estar armazenadas no banco de dados. A autenticação ocorre mediante duas condições: o usuário precisa estar previamente cadastrado e a senha inserida deve estar correta. Após a autenticação bem-sucedida, o servidor gera um token. Os campos para acessar o sistema são o nome de usuário e senha, mas é possível alterá-los de nome para e-mail sem grandes dificuldades. Uma vez autenticado, é possível registrar um novo usuário que ainda não esteja cadastrado no banco de dados, onde o servidor realizará uma busca para verificar se já está ou não cadastrado.

Nossa parte servidora consiste em um servidor Express.js que implementa uma aplicação de autenticação de usuários com JWT (JSON Web Token). Utilizamos o módulo crypto para armazenar as senhas de forma criptografada.


## 👀 Preview

| Autenticação | Usuários |
|----------|----------|
| ![Descrição da imagem 1](cliente/public/autenticacao.png) | ![Descrição da imagem 2](cliente/public/users.png) |

| Cadastro | Usuários pós cadastro |
|----------|----------|
| ![Descrição da imagem 3](cliente/public/cadastro.png) | ![Descrição da imagem 4](cliente/public/users-2.png) |


## 📝 Pré-requesitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)


## 🗂 Executar Projeto

```bash
# Clonar Projeto.
$ git clone https://github.com/Arthur-SD15/Autenticacao-ServerClient.git

# Entrar na pasta servidor.
$ cd servidor

# Baixar as dependencias.
$ npm install

# Executar.
$ npm start

# Novo cmd.
# Entrar na pasta cliente.
$ cd cliente

# Baixar as dependencias.
$ npm install

# Executar.
$ npm run dev

 ```

## 📬 Banco de Dados

```bash
# Criar um arquivo ".env" na raiz da pasta servidor e configurar o banco de dados.
# Modelo do arquivo ".env" deve seguir o ".env.example".

# Cria o banco de dados definido na configuração do Sequelize.
$ npx sequelize db:create

# Aplica migrações para sincronizar o esquema do banco de dados com as definições de modelo do Sequelize.
$ npx sequelize db:migrate

# Popula o banco de dados com dados predefinidos nos arquivos seeders do Sequelize.
$ npx sequelize db:seed:all
 ```


## 🧑 Aluno

- Arthur Silva Dantas


## 🧑‍🏫 Professores

- Luiz Fernando Picolo - Programação e Tecnologias para Aplicações Servidor
- Marcelino Vitor - Programação e Tecnologias para Aplicações Cliente

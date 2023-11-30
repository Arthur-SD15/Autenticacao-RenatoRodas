<h1 align="center">
  Projeto Autenticação | Client e Server
</h1>

<p align="center">
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Pré-requesitos">Pré-requesitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Executar Projeto">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Aluno">Aluno</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Professores">Professores</a>
</p>

<p align="center">
  <img src="https://github.com/Arthur-SD15/PTAS-2-Cadastro-Pessoas/raw/main/logo_ifms.png" width="300px">
</p>

## 💻 Projeto

Projeto desenvolvido ao longo do semestre, trata-se de uma continuidade do [Projeto Autenticação](https://github.com/Arthur-SD15/Projeto-Autenticacao). Portanto, tudo que foi atribuído nesse projeto inicial também está presente neste. Este projeto abrange tanto a parte do cliente quanto do servidor, configurando-se como um sistema de autenticação de usuários.

Para realizar a autenticação, o usuário deve ter um cadastro prévio, e essas informações devem estar armazenadas no banco de dados. A autenticação ocorre mediante duas condições: o usuário precisa estar previamente cadastrado e a senha inserida deve estar correta. Após a autenticação bem-sucedida, o servidor gera um token. Os campos para acessar o sistema são o nome de usuário e senha, mas é possível alterá-los de nome para e-mail sem grandes dificuldades. Uma vez autenticado, é possível registrar um novo usuário que ainda não esteja cadastrado no banco de dados, onde o servidor realizará uma busca para verificar se já está ou não cadastrado.

Nossa parte servidora consiste em um servidor Express.js que implementa uma aplicação de autenticação de usuários com JWT (JSON Web Token). Utilizamos o módulo crypto para armazenar as senhas de forma criptografada.

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

# Criar um arquivo ".env" na raiz da pasta servidor e configurar o banco de dados.
# Modelo do arquivo ".env" deve seguir o ".env.example".

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

## 🧑 Aluno

- Arthur Silva Dantas

## 🧑‍🏫 Professores

- Luiz Fernando Picolo - Programação e Tecnologias para Aplicações Servidor
- Marcelino Vitor - Programação e Tecnologias para Aplicações Cliente

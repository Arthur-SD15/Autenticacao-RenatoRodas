<h1 align="center">
  Autenticação | Renato Rodas
</h1>

<p align="center">
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Alunos">Alunos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Criptografia">Criptografia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Professores">Professores</a>
</p>

<p align="center">
  <img src="/assets/logo-ifms.png" width="350px">
</p>


## :earth_americas: Projeto

Projeto desenvolvido no Instituto Federal de Mato Grosso do Sul, teve como objetivo criar uma aplicação web completa, integrando conhecimentos das disciplinas de Banco de Dados, Programação e Tecnologias para Aplicações Servidor e Cliente.

Para realizar a autenticação, o usuário deve ter um cadastro prévio, e essas informações devem estar armazenadas no banco de dados. A autenticação ocorre mediante duas condições: o usuário precisa estar previamente cadastrado e a senha inserida deve estar correta. Após a autenticação bem-sucedida, o servidor gera um token. Os campos para acessar o sistema são o nome de usuário e senha, mas é possível alterá-los de nome para e-mail sem grandes dificuldades. Uma vez autenticado, é possível registrar um novo usuário que ainda não esteja cadastrado no banco de dados, onde o servidor realizará uma busca para verificar se já está ou não cadastrado.

<table align="center">
  <thead>
    <tr>
      <th>Name</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>123</td>
    </tr>
    <tr>
      <td>Fulano</td>
      <td>456</td>
    </tr>
  </tbody>
</table>



## :lock: Criptografia

O servidor, consiste em um servidor Express.js que implementa uma aplicação de autenticação de usuários com JWT (JSON Web Token). Utilizamos o módulo crypto para armazenar as senhas de forma criptografada no Banco de Dados.

<p align="center">
  <img src="/assets/readme-criptografia.png">
</p>



## :man: Alunos

- Arthur Silva Dantas



## :man_teacher: Professores

- Luiz Fernando Picolo - Programação e Tecnologias para Aplicações Servidor
- Marcelino Vitor - Programação e Tecnologias para Aplicações Cliente

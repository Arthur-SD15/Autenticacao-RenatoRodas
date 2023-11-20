"use server";

const url = "https://aula-17-10-rho-seven.vercel.app";

const usuarios = [
  {
    nome: "Arthur Dantas",
    email: "arthur@gmail.com",
    senha: "2252",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  },
  {
    nome: "Renato Borges Lazarini",
    email: "renato@gmail.com",
    senha: "2252",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  },
  {
    nome: "Rafael Venancio Cruz",
    email: "rafael@gmail.com",
    senha: "2252",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  },
  {
    nome: "Marcelino Vitor",
    email: "marcelino@gmail.com",
    senha: "2252",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  },
  {
    nome: "Claudio Zarate",
    email: "claudio@gmail.com",
    senha: "2252",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  }
];

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticated",
      {
      cache:"no-cache",
        method: "POST",
        headers: { "Content-Type": "Application/json"},
        body: JSON.stringify(user)
      }
    );

    let userAuth = await responseOfApi.json();
    return userAuth
};

const getUsers = () => {
  return usuarios
};

export { getUsers, getUserAuthenticated };
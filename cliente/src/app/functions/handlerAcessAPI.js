"use server";

const url = "http://localhost:4000";

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/logar",
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

const postUser = async (user) => {
  try{
    const responseOfApi = await fetch(url + "/user", {
      method: 'POST',
      headers: {'Content-Type': 'Aplication/json' },
      body: JSON.stringify(user)
    })
    const userSave = await responseOfApi.json();
    return userSave;
  } catch {
    return null
  }
}

const getUsers = async () => {
  const response = await fetch(url + "/usuarios/listar", {next: {revalidate: 15}})
  const users = await response.json()
  console.log(users)
};

export { getUsers, getUserAuthenticated, postUser };
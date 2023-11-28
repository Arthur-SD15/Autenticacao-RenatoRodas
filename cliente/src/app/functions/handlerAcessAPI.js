"use server";

const url = "https://aula-17-10.vercel.app/";

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
  const response = await fetch(url + "/users", {next: {revalidate: 15}})
  const users = await response.json()
  return users
};

export { getUsers, getUserAuthenticated, postUser };
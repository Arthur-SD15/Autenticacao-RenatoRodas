"use server";

import { cookies } from "next/headers";

const url = "http://localhost:4000";

const getUserAuthenticated = async (user) => {
  const responseOfApi = await fetch(url + "/logar", {
    cache: "no-cache",
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(user),
  });

  let userAuth = await responseOfApi.json();
  return userAuth;
};

const postUser = async (user) => {
  const token = cookies().get("token")?.value;
  try {
    const responseOfApi = await fetch(url + "/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Cookie: `token=${token}`,
      },
      body: JSON.stringify(user),
    });
    const userSave = await responseOfApi.json();
    return userSave;
  } catch {
    return null;
  }
};

const getUsers = async (user) => {
  const token = cookies().get("token")?.value;

  try {
    const responseOfApi = await fetch(url + "/usuarios/listar", {
      cache: "no-cache",
      headers: {
        "Content-Type": "Application/json",
        Cookie: `token=${token}`,
      },
      body: JSON.stringify(user),
    });
    const users = await responseOfApi.json();
    return users;
  } catch {
    return null;
  }
};

export { getUsers, getUserAuthenticated, postUser };
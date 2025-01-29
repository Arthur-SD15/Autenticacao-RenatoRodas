"use server";

import { cookies } from "next/headers";

const url = "http://localhost:3001";

const getUserAuthenticated = async (user) => {
  try {
    const responseOfApi = await fetch(url + "/logar", {
      cache: "no-cache",
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(user),
    });

    if (!responseOfApi.ok) {
      const errorText = await responseOfApi.text();
      throw new Error(errorText);
    }
    const userAuth = await responseOfApi.json();
    return userAuth;
  } catch (error) {
    return { error: error.message };
  }
};

const postUser = async (user) => {
  const token = (await cookies()).get("token")?.value;

  try {
    const responseOfApi = await fetch(url + "/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Cookie: `token=${token}`,
      },
      body: JSON.stringify(user),
    });

    if (!responseOfApi.ok) {
      let errorText = await responseOfApi.text();
      try {
        const errorJson = JSON.parse(errorText);
        return { error: errorJson.message };
      } catch (error) {
        return { error: errorText };
      }
    }
    const userSave = await responseOfApi.json();
    return userSave;
  } catch (error) {
    return { error: error.message };
  }
};

const getUsers = async (user) => {
  const token = (await cookies()).get("token")?.value;

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
    console.log(users);
    return users;
  } catch {
    return null;
  }
};

export { getUsers, getUserAuthenticated, postUser };

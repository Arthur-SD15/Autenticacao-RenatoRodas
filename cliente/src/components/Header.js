"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Capa() {
  const { push, refresh } = useRouter();

  const removerToken = async (e) => {
    e.preventDefault();
    try {
      if (!Cookies.get("token")) {
        toast?.error("Se autentique primeiro.");
      } else {
        toast?.success("Deslogando.");
        setTimeout(() => {
          Cookies.remove("token");
          push("/");
        }, 1500);
      }
    } catch {
      toast?.error("Error!");
      refresh();
    }
  };

  const cadastrar = async (e) => {
    e.preventDefault();
    try {
      if (!Cookies.get("token")) {
        toast?.error("Se autentique primeiro.");
      } else {
        toast?.success("Direcionando.");
        setTimeout(() => {
          push("/register");
        }, 1500);
      }
    } catch {
      toast.error("Error!");
      refresh();
    }
  };

  return (
    <nav className="bg-white dark:bg-custom-blue border-b-12 border-custom-yellow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img
            src="../logo-renato-rodas.png"
            className="h-8 mr-3"
            alt="Renato Rodas Logo"
          />
        </a>
        <div className="flex space-x-4">
          <button
            className="bg-custom-yellow text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            onClick={cadastrar}
          >
            Cadastrar
          </button>
          <button
            className="bg-custom-yellow text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            onClick={removerToken}
          >
            Deslogar
          </button>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}

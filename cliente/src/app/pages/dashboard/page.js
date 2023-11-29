import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListUser from '@/app/ListUser/ListUser';
import { Suspense } from "react";

export default async function Dashboard() {
    let lista = await getUsers();
    return (
        <div className="max-w-2xl mx-auto p-4">
            <Suspense fallback={<p className="text-center">Carregando...</p>}>
                <ListUser users={lista} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {lista.map((user) => (
                        <div
                            className="bg-white p-4 border rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">{user.usuario}</h2>
                        </div>
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

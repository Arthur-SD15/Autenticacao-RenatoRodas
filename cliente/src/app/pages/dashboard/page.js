import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListUser from '@/app/ListUser/ListUser';

export default async function Dashboard() {
    let lista = await getUsers();

    return (
        <div className="max-w-2xl mx-auto p-4">
            {lista.length === 0 ? (
                <p className="text-center">Nenhum usuário encontrado.</p>
            ) : (
                <>
                    <ListUser users={lista} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {lista.map((user) => (
                            <div key={user.id} className="bg-white p-4 border rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold">{user.usuario}</h2>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

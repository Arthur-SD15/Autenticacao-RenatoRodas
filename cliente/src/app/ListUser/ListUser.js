export default async function ListUser({usuario}) {
    await new Promise((resolve)=> setTimeout(resolve, 5000))
    return(
        <div>
             {usuario?.map((user, index)=>
             <p key={index}>{user.name}</p>
             )}
        </div>
    )
}
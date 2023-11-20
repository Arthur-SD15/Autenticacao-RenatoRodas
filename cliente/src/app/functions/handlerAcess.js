import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        localStorage.setItem('nome', userAuth.nome); 
        console.log(localStorage.getItem('nome'));
    }
    return userAuth;
}
export default handlerAcessUser;


import { decode } from "jsonwebtoken";
const validateToken = (token)=>{
    const isTokenValidate = decode(token);
    if(isTokenValidate){
        return token= true
    }
    return token=false;
}   
export {validateToken};
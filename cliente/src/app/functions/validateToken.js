import { decode } from "jsonwebtoken";
const validateToken = (token)=>{
    try{
        const isTokenValidate = decode(token)
        if(isTokenValidate){
            return true
        }
    } catch{
        return false
    }
}   
export {validateToken};
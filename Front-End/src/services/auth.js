import axios from "axios";

export const login  = async({email ,  password} ) => { 
const data = await axios({url : "localhost:3001/api/auth/login" , method:"post" , body :{email , password } , withCredentials:true }).catch(e => console.log(e))
console.log(data)
}
import axios from "axios";

export const login  = async({email,  password} ) => { 
const {data} = await axios({url: "http://localhost:3001/api/auth/login", method:"post" , data:{email, password }, withCredentials:true }).catch(e => console.log(e))
return data
}
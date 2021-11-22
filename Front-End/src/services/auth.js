import axios from "axios";

export const login  = async({email,  password} ) => { 
const {data} = await axios({
  url: "http://localhost:3001/api/auth/login", 
  method:"post", 
  data:{ email, password }, 
  withCredentials:true 
}).catch(e => console.log(e))
return data
}

export const register  = async({first_name, last_name, email, password, confirm_password} ) => { 
  const {data} = await axios({
    url: "http://localhost:3001/api/auth/register", 
    method:"post", 
    data:{ first_name, last_name, email, password, confirm_password }, 
    withCredentials:true 
  }).catch(e => console.log(e))
  return data
  }
import react , {useState} from 'react'
import  {login} from "../services/auth"
const Login = ()=> {
  const [userInfo  , setUserInfo] = useState({email:"new@hotmail.com" , password:"123"})

  const handleLogin = ()=> {
    login(userInfo)
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>email</p> 
          <input type="text" value={userInfo.email} onChange={(e)=> setUserInfo({...userInfo ,email:e.target.value })} autoComplete="off"  />
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={userInfo.password} onChange={(e)=> setUserInfo({...userInfo ,password:e.target.value })} autoComplete="off" />
        </label>
        <div>
          <button type="submit" onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  )
}
export default Login
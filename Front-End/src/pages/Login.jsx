import react, { useState } from 'react';
import  { login } from "../services/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ 
    email: "", 
    password: ""
  })

  const handleLogin = async () => {
   const {success, message} = await login(userInfo)
   if (success) {
   navigate('/dashboard');
   }
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
        <label>
          <p>email</p> 
          <input type="text"  defaultValue={userInfo.email} onChange={(event) => setUserInfo({...userInfo, email: event.target.value })} autoComplete="off" />
        </label>
        <label>
          <p>Password</p>
          <input type="password"  defaultValue={userInfo.password} onChange={(event) => setUserInfo({...userInfo, password: event.target.value })} autoComplete="off" />
        </label>
        <div>
          <button type="submit" onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}
export default Login
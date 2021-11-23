import react, { useState } from 'react';
import  { login } from "../services/auth";
import { useNavigate } from 'react-router-dom';
import "./Login.scss";
import "../components/Navbar.jsx";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ 
    email: "", 
    password: ""
  })

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (event) => {
  event.preventDefault()
   try { 
     await login(userInfo)
      navigate('/dashboard');
   } catch(e) {
     console.log(e)
     console.log(e.response.status)
     console.log(e.response.data)
     console.log(e.response.data.message)
     setErrorMsg(e.response.data.message)
   }
  }

  return(
<<<<<<< HEAD
    <div className="login-wrapper">
      <Navbar></Navbar>
=======
    <div id="login-container">
    <section className="login-wrapper">
>>>>>>> component/dashboard
      <h1>Please Log In</h1>
      <form onSubmit={handleLogin}>
        <label>
          <p>Email</p> 
          <input type="email" defaultValue={userInfo.email} onChange={(event) => setUserInfo({...userInfo, email: event.target.value })} autoComplete="off" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" defaultValue={userInfo.password} onChange={(event) => setUserInfo({...userInfo, password: event.target.value })} autoComplete="off" />
        </label>
        <span className="error-msg">{errorMsg}</span>
        <div>
          <button type="submit" className="login-btn">Login</button>
        </div>
        </form>
        <div>Don't have an account? |
        <span> Register</span>
        </div>
<<<<<<< HEAD
        <Footer/>
=======
    </section>
>>>>>>> component/dashboard
    </div>
    
  )
}
export default Login
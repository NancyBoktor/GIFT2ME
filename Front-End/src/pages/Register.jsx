import react, { useState } from 'react';
import  { register } from "../services/auth";
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [newUserInfo, setNewUserInfo] = useState({ 
    first_name: "",
    last_name: "",
    email: "", 
    password: "",
    confirm_password: ""
  })

  const handleRegister = async () => {
    const {success, message} = await register(newUserInfo)
    if (success) {
    navigate('/dashboard');
    }
   }

  return (
    <div className="register-page">
    <section className="register-wrapper">
      <h1>Register</h1>
        <form onSubmit={handleRegister}>
        <label>
        <input type="text" placeholder="First Name" defaultValue={newUserInfo.first_name} onChange={(event) => setNewUserInfo({...newUserInfo, first_name: event.target.value })} autoComplete="off"/>
        </label>
      <label>
        <input type="text" placeholder="Last Name" defaultValue={newUserInfo.last_name} onChange={(event) => setNewUserInfo({...newUserInfo, last_name: event.target.value })} autoComplete="off"/>
      </label>
      <label>
        <input type="text" placeholder="Email" defaultValue={newUserInfo.email} onChange={(event) => setNewUserInfo({...newUserInfo, email: event.target.value })} autoComplete="off"/>
      </label>
      <label> 
        <input type="password" placeholder="Password (min 8 char)" defaultValue={newUserInfo.password} onChange={(event) => setNewUserInfo({...newUserInfo, password: event.target.value })} autoComplete="off"/>
      </label>
      <label>
        <input type="password" placeholder="Confirm Password" />
      </label>
      <div>
        <button type="submit" className="register-btn">Register</button>
      </div>
      </form>
      <br/>
      <div>Already have an account? |
        <span className="login-redirect"> Login</span>
        </div>
          </section>
          <section className="title-align-right">
          <div className="title-align-right">
            <h1 className="title">GIFT2ME</h1>
          </div>
          <div className="slogan-div">
            <p className="slogan">
            <span>
              An easy app to help event organizers request gifts from friends and family
            </span>
            </p>
          </div> 
          </section>
          <footer>
          <p>Made with ❤️ Maram, Nancy & Shanna</p>
          </footer>
  </div>
  
  )
}

export default Register
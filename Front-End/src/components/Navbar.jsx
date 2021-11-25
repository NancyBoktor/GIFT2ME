import react, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { logout } from "../services/auth";
import "./Navbar.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../fontawesome";


const Navbar = () => {
  const [userName, setUserName] = useState("");

  // retrieve the token from local storage, if empty string, you need to logged in.
  const token = window.localStorage.getItem("token");

  // authenticates the user and gets their name to be displayed on the nav bar
  useEffect(() => {
    if (token) {
      const contents = JSON.parse(atob(token.split(".")[1]));
      setUserName(contents.first_name);
      console.log("userName", userName);
      console.log("contents", contents);
    }
  }, []);
  // handle the logout click
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await logout();
      localStorage.removeItem("token");
      navigate("/login");
    } catch (e) {
      console.log(e);
      console.log(e.response.status);
      console.log(e.response.data);
      console.log(e.response.data.message);
      setErrorMsg(e.response.data.message);
    }
  };
  return (

    <nav className="nav">
      <Link to="/" className="link" style={{ textDecoration: 'none' }}>
        <div className="logo-container">
          <img src="/orange.png" alt="logo" />
          <h3 className="logo">GIFT2ME</h3>
        </div>
      </Link>
      <span className="wrapper">
        
      {token && (
        <span className="welcome-span">
          <h5>Welcome, {userName}!</h5>
          
        </span>
        
      )}
        <Link to="/" className="link" style={{ textDecoration: 'none' }}>
          <span className="home"><FontAwesomeIcon icon={['fa', 'home']}/> Home </span>
        </Link>
        {!token && (
          <Link to="/register" className="link" style={{ textDecoration: 'none' }}>
            <span className="register-span"> Register </span>
          </Link>
        )}
        {!token && (
          <Link to="/login" className="link" style={{ textDecoration: 'none' }}>
            <span className="login-span"> Login </span>
          </Link>
        )}
        {token && (
            <span className="logout-span" onClick={handleLogout}> Logout </span>
        )}
      </span>
    </nav>
    
  );
};

export default Navbar;

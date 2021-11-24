import react, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { logout } from "../services/auth";
import "./Navbar.scss";

const Navbar = (props) => {
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
    }
    catch (e) {
      console.log(e);
      console.log(e.response.status);
      console.log(e.response.data);
      console.log(e.response.data.message);
      setErrorMsg(e.response.data.message);
    }
  };
  return (
    <nav className="nav">
      <Link to="/">
        <span className="logo"> GIFT2ME</span>
      </Link>
      {token && <p>Welcome {userName} !</p>}

      <span className="">
        {!token && <Link to="/register"><span className="register-span">  Register  </span></Link>}
        {!token && (
          <Link to="/login" >
            <span className="login-span">  Login  </span>
          </Link>
        )}
        {token && (
          <button className="btn" onClick={handleLogout} >
            Logout
          </button>
        )}

      </span>
    </nav>
  );
};

export default Navbar;

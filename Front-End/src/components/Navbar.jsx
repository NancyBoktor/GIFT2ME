import react, { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar.scss";


const Navbar = (props) => {
  const [userName, setUserName] = useState("");

  // retrieve the token from local storage, if empty string, you need to logged in.
  const token = localStorage.getItem('jwtToken')

  // authenticates the user and gets their name to be displayed on the nav bar
  useEffect(() => {
    axios.get('/isUserAuth', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        const name = res.data.user
        setUserName(`${name.first_name} ${name.last_name}`);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  // handle the logout click
  const handleClick = (event) => {
    event.preventDefault();
    axios.post('/logout')
      .then((res) => {
        console.log("logout successful!");
        // reset the localstorage value to an empty string
        localStorage.setItem('jwtToken', '', { maxAge: 1 })
        // redirect to the home page
        window.location = res.data.redirect
      })
      .catch((err) => {
        console.log(err);
      })
  };
  return (
    <nav className='nav'>
      <Link to="/">
      <span className='logo'>GIFT2ME</span>
      </Link>
     
      <span className='span' >Login</span>
      <span className='span'> Logout</span>
      {!token &&
          <Link to="/register" className="linkbar">
            Register
          </Link>
        }
    </nav>
  )
}

export default Navbar;
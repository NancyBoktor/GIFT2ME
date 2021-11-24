import react, { useState } from "react";
import { register } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";

const Register = () => {
  const navigate = useNavigate();

  const [newUserInfo, setNewUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const data = await register(newUserInfo);
      const token = data.data.token;
      console.log("Token", token);
      localStorage.setItem("token", token);
      console.log("Data", data);
      navigate("/dashboard");
    } catch (e) {
      console.log(e.response);
      console.log(e.response.status);
      console.log(e.response.data);
      setErrorMsg(e.response.data.message);
    }
  };

  return (
    <div className="register-background">
      <Navbar/>
      <section className="register-wrapper">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <label>first name</label>
          <input
            type="text"
            placeholder="First Name"
            defaultValue={newUserInfo.first_name}
            onChange={(event) =>
              setNewUserInfo({
                ...newUserInfo,
                first_name: event.target.value,
              })
            }
            autoComplete="off"
          />
          <label>last name</label>
          <input
            type="text"
            placeholder="Last Name"
            defaultValue={newUserInfo.last_name}
            onChange={(event) =>
              setNewUserInfo({
                ...newUserInfo,
                last_name: event.target.value,
              })
            }
            autoComplete="off"
          />

          <label>email</label>
          <input
            type="email"
            placeholder="Email"
            defaultValue={newUserInfo.email}
            onChange={(event) =>
              setNewUserInfo({ ...newUserInfo, email: event.target.value })
            }
            autoComplete="off"
          />
          <label>password</label>
          <input
            type="password"
            placeholder="Password (min 8 char)"
            defaultValue={newUserInfo.password}
            onChange={(event) =>
              setNewUserInfo({ ...newUserInfo, password: event.target.value })
            }
            autoComplete="off"
          />
          <label>confirm password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            defaultValue={newUserInfo.confirm_password}
            onChange={(event) =>
              setNewUserInfo({
                ...newUserInfo,
                confirm_password: event.target.value,
              })
            }
            autoComplete="off"
          />
          <span className="error-msg">{errorMsg}</span>
          <div>
            <button type="submit" className="register-btn">
              Register
            </button>
          </div>
        </form>
        <br />
        <div>
          Already have an account? |
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
              An easy app to help event organizers request gifts from friends
              and family
            </span>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;

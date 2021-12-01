import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mybutton: {
      main: "#72D6C9",
    },
  },
});

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await login(userInfo);
      const token = data.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (e) {
      console.error(e);
      if (e.response) {
        setErrorMsg(e.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="login-background">
        <Navbar />
        <section className="login-wrapper">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>
              <input
                type="email"
                placeholder="email"
                defaultValue={userInfo.email}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, email: event.target.value })
                }
                autoComplete="off"
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="**********"
                defaultValue={userInfo.password}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, password: event.target.value })
                }
                autoComplete="off"
              />
            </label>
            <span className="error-msg">{errorMsg}</span>
            <div>
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="mybutton" type="submit">
                  Login
                </Button>
              </ThemeProvider>
            </div>
          </form>
          <div>
            Don't have an account? |{" "}
            <Link to="/register">
              <span>Register</span>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Login;

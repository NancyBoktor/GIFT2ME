import { useState } from "react";
import { register } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Register.scss";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mybutton: {
      main: '#72D6C9',
    },
  },
});

const Register = () => {
  const navigate = useNavigate();
  const [newUserInfo, setNewUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: ""
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const data = await register(newUserInfo);
      const token = data.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (e) {
      setErrorMsg(e.response.data.message);
    }
  };

  return (
    <>
      <div className="register-background">
        <div className="parent-container">
          <section className="register-wrapper">
            <h2 className="register-title">Register</h2>
            <form onSubmit={handleRegister}>
              <label>
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
              </label>
              <label>

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
              </label>
              <label>
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue={newUserInfo.email}
                  onChange={(event) =>
                    setNewUserInfo({ ...newUserInfo, email: event.target.value })
                  }
                  autoComplete="off"
                />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  defaultValue={newUserInfo.password}
                  onChange={(event) =>
                    setNewUserInfo({ ...newUserInfo, password: event.target.value })
                  }
                  autoComplete="off"
                />
              </label>
              <label>
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
              </label>
              <span className="error-msg">{errorMsg}</span>
              <div>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="mybutton"
                  type="submit"
                >
                  Register
                </Button>
                </ThemeProvider>
              </div>
            </form>
            <br />
            <div>
              Already have an account? | <Link to="/login"><span>Login</span></Link>
            </div>
          </section>

          <section className="logo-container-2">
            <div className="title-logo">
            <h1 className="logo-2">GIFT2ME</h1>
            <img className="orange-2" src="/orange.png" alt="logo" />
            </div>

            <div className="slogan-div">
              <p className="slogan">
                A simple website to help people request gifts from friends
                & family
              </p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;

import react, { useState } from "react";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await logout();
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
    <div className="login-wrapper">
      <form onSubmit={handleLogout}>
        <div>
          <button type="submit" className="login-btn">
            logout
          </button>
        </div>
      </form>
    </div>
  );
};
export default Logout;

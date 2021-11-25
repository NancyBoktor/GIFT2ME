import axios from "axios";

export const login = async ({ email, password }) => {
  return axios({
    url: "http://localhost:3001/api/auth/login",
    method: "post",
    data: { email, password },
    withCredentials: true
  });
};

export const register = async ({
  first_name,
  last_name,
  email,
  password,
  confirm_password
}) => {
  return axios({
    url: "http://localhost:3001/api/auth/register",
    method: "post",
    data: { first_name, last_name, email, password, confirm_password },
    withCredentials: true
  });
};

export const logout = async () => {
  return axios({
    url: "http://localhost:3001/api/auth/logout",
    method: "post",
    withCredentials: true
  });
};
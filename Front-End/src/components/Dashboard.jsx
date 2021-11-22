import React from "react";
import "./Dashboard.scss";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";

const Dashboard = (props) => {
  return (
    <div>
    <Navbar/>
      <h1 className="title">Dashboard</h1>
      <Footer/>

    </div>
  )
}

export default Dashboard
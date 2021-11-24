import React, { useState } from "react";
import "./Invite.scss";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import "../fontawesome";
import "../index.jsx";

const Invite = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Invitation List</h1>
      <div className="block">
      <form>
        <div className="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input type="text" className="fields form-control" id="formGroupExampleInput" placeholder="Name" />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Email</label>
          <input type="email" className="fields form-control" id="formGroupExampleInput2" placeholder="Email" />
        </div>
      </form>
      <button type="button" class="lng btn btn-info">Send Invites</button>
      <button type="button" class="lng btn btn-info">Copy Share Link</button>
      </div>

      {/* <div className="block">
        <div className="name-email">
        <div className="title">
          <span>Name</span>
        </div>
        <div className="title">
          <span>Email</span>
        </div>
        </div>
        <div className="columns">
        <div className="name-column">
          <input type="text" className="name" placeholder="Name" maxLength="50"/>
        </div>
        <div className="email-column">
          <input type="email" className="email" placeholder="Email" maxLength="50"/>
        </div>
        </div>
        <div>
        <button type="button" className="add-row"> 
        <span>+ Add Row</span>
        </button>
        <div>
        <button type="button" className="add-row">Send Invites</button>
        </div>
        <div>
        <button type="button" className="add-row">Copy Share Link</button>
        </div>
      </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default Invite;
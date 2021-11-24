import React, { useState, Fragment } from "react";
import "./Invite.scss";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import "../fontawesome";
import "../index.jsx";

const Invite = (props) => {
  const [inputFields, setInputFields] = useState([
    { name: "", email: "" }
  ]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("inputfields", inputFields)
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    } else {
      values[index].email = event.target.value;
    }
    setInputFields(values)
  }

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ name: '', email: '' });
    setInputFields(values);
  };

  return (
    <>
      <Navbar />
      <h1>Invitation List</h1>
      <div className="block">
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputField, index) => (
              <Fragment key={`${inputField}~${index}`}>
              <div className="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input 
                type="text" 
                name="name" 
                value={inputField.name}
                onChange={event => handleInputChange(index, event)} 
                className="fields form-control" 
                id="formGroupExampleInput" 
                placeholder="Name" />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input 
                type="email" 
                name="email"
                value={inputField.email}
                onChange={event => handleInputChange(index, event)} 
                className="fields form-control" 
                id="formGroupExampleInput2" 
                placeholder="Email" />
               </div>
              </Fragment>
          ))}
        </form>
        <div type="button" onClick={() => handleAddFields()}>+ Add Rows</div>
        <button type="button" class="lng btn btn-info" onSubmit={handleSubmit}>Send Invites</button>
        <button type="button" class="lng btn btn-info">Copy Share Link</button>
      </div>
      <Footer />
    </>
  )
}

export default Invite;
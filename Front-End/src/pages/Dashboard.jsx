import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
// import Navbar from "./Navbar.jsx";
// import Footer from "./Footer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../fontawesome";
import axios from "axios";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [eventNames, setEventNames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/events', {withCredentials: true})
      .then(res => setEventNames(res.data));
  }, []);

  const handleDelete = (eventId) => {
    console.log("EVENTID:", eventId)
    return axios
    .delete(`http://localhost:3001/api/events/delete/${eventId}`, {withCredentials: true})
    .then((res) => { 
      console.log("res:", res)
      const newEvents = [...eventNames]
      const index = eventNames.findIndex((event) => event.id === eventId)
      newEvents.splice(index, 1)
      setEventNames(newEvents)
    })
  }

  const create = () => {
    navigate('/events');
  }
  const edit = () => {
    navigate('/events/:id');  //<- THIS ROUTE NEEDS TO BE CHANGED
  }

  return (
    <div classname="dashboard-container">
      <Navbar />
      <h1 className="title">My Dashboard</h1>
      <h2>Hey, Ami!</h2>
      <button onClick={create}>Make an Event</button>

      <div className="event-container">
        <table>
          <thead>
            <tr>
              <th>Wishlist</th>
              <th>Share Wishlist</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {eventNames.map((event) => (
              <tr>
                <td>{event.event_name}</td>
                <td><FontAwesomeIcon icon={['fas', 'share-alt']} /></td>
                <td className="click" onClick={edit}><FontAwesomeIcon icon={['fas', 'edit']} /></td>
                <td className="click" onClick={()=> handleDelete(event.id)}><FontAwesomeIcon icon={['fas', 'trash']} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

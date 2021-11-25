import React, { useState,useEffect } from "react";
import "./Dashboard.scss";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import data from "./mockData.json"; // replacement for api call to database
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState(data);
  const [userName, setUserName] = useState("");

  // retrieve the token from local storage, if empty string, you need to logged in.
  const token = window.localStorage.getItem("token");

  // authenticates the user and gets their name to be displayed on the nav bar
  useEffect(() => {
    if (token) {
      const contents = JSON.parse(atob(token.split(".")[1]));
      setUserName(contents.first_name);
      console.log("contents", contents);
    }
  }, []);


  const handleDelete = (eventId) => {
    const newEvents = [...events];
    const index = events.findIndex((event) => event.id === eventId);
    newEvents.splice(index, 1);
    setEvents(newEvents);
  };

  const create = () => {
    navigate("/events");
  };
  const edit = () => {
    navigate("/events/:id"); //<- THIS ROUTE NEEDS TO BE CHANGED
  };

  

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
              <th>Reserved Gifts</th>
              <th>Share Wishlist</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr>
                <td>{event.event_name}</td>
                <td>2 (count qty = 0)</td>
                <td>
                  <a href={`mailto:?subject=${userName}'s Invitaion&body=Hi%2C%0AI would like to invite you to my ${event.event_name} on ${event.date} at ${event.address}`}>
                    <FontAwesomeIcon icon={["fas", "share-alt"]} /></a>
                </td>
                <td className="click" onClick={edit}>
                  <FontAwesomeIcon icon={["fas", "edit"]} />
                </td>
                <td className="click" onClick={handleDelete}>
                  <FontAwesomeIcon icon={["fas", "trash"]} />
                </td>
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

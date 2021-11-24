import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Dashboard.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../fontawesome";
// import ConfirmDelete from "../components/ConfirmDelete";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [eventNames, setEventNames] = useState([]);
  const [show, setShow] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/api/events', { withCredentials: true })
      .then(res => setEventNames(res.data));
  }, []);

  const handleDelete = (eventId) => {
    console.log("EVENTID:", eventId)
    return axios
      .delete(`http://localhost:3001/api/events/delete/${eventId}`, { withCredentials: true })
      .then((res) => {
        console.log("res:", res)
        const newEvents = [...eventNames]
        const index = eventNames.findIndex((event) => event.id === eventId)
        newEvents.splice(index, 1)
        setEventNames(newEvents)
      });
  }

  const handleShow = (eventId) => setShow({ ...show, [eventId]: true });
  const handleClose = (eventId) => setShow({ ...show, [eventId]: false });

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
                <td className="click" onClick={() => handleShow(event.id)}><FontAwesomeIcon icon={['fas', 'trash']} /></td>
                {ReactDOM.createPortal(
                  <Modal show={show[event.id]}>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Event</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <p>Are you sure you wish to delete this event?</p>
                      <p className="delete-warning">This action cannot be undone</p>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button onClick={() => handleClose(event.id)} variant="secondary">Cancel</Button>
                      <Button onClick={() => handleDelete(event.id)} variant="primary">Delete</Button>
                    </Modal.Footer>
                  </Modal>,
                  document.body
                )}
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

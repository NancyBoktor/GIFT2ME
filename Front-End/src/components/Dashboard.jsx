import React, { useState } from "react";
import "./Dashboard.scss";
import data from "./mockData.json" // replacement for api call to database
// import { redirect } from 'react-router-dom';


const Dashboard = (props) => {
  const [events, setEvents] = useState(data);

  const handleDelete = (eventId) => {
    const newEvents = [...events];
    const index = events.findIndex((event) => event.id === eventId)
    newEvents.splice(index, 1)
    setEvents(newEvents);
  }

  const redirect = () => {
    redirect('/register');
  }


  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="title">My Dashboard</h1>
      <h2>Hey, Ami!</h2>
      <button>
        Make an Event
      </button>

      <div className="event-container">
        <table>
          <thead>
            <tr>
              <th>Wishlist</th>
              <th>Gifts #</th>
              <th>Reserved</th>
              <th>Share Wishlist</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event)=> (
               <tr>
               <td>{event.event_name}</td>
               <td>4 (count gifts)</td>
               <td>2 (count qty = 0)</td>
               <td>✣</td>
               <td onClick={redirect}>✏️</td>
               <td onClick={handleDelete}>🗑</td>
             </tr>
            ))}
           
          </tbody>
        </table>
      </div>

      
    
      {/* <Footer /> */}
    </div>
  )
}

export default Dashboard
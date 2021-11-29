import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";
import Logout from "./components/logout";
import About from "./pages/About";
import EditEvent from "./pages/EditEvent";
import Event from "./pages/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard key="events" />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/events" element={<CreateEvent />} />
        <Route path="/events/edit/:id" element={<EditEvent />} />
        <Route path="/events/:id" element={<CreateEvent />} />

        {/* <Route path="/events/:id" element={<Wishlist />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

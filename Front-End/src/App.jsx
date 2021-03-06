import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";
import Logout from "./components/Logout";
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
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard key="events" />} />
        <Route path="/events" element={<CreateEvent />} />
        <Route path="/events/:id/edit" element={<EditEvent />} />
        <Route path="/invitation/:id" element={<Event />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

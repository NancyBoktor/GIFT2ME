import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import EventForm from "./components/event-form";
import CreateGiftForm from "./components/CreateGiftForm";
import Logout from "./components/logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/events" element={<EventForm />} />
        <Route path="/gifts"  element={<CreateGiftForm />} />
        {/* <Route path="/events/:id" element={<Wishlist />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Login from "./components/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/home/profile/Profile";
import Register from "./components/register/Register";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

//test

export default App;

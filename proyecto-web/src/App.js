// Dependencias generales
import React from "react";
import axios from "axios";

// import "./App.css";
import "./Css/Cards_landing.css";

import { GlobalStyle, NavBar } from "./components/StilizedComponents/AppStyles";

// import components
import Login from "./components/Login";
import Signup from "./components/Signup";
import Restaurants from "./components/Restaurants";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";
import Signout from "./components/Signout";
import RestaurantCreate from "./components/RestaurantCreate.js";
import Deleteuser from "./components/DeleteUser";
import Profile from "./components/Profile";
import Edituser from "./components/EditUser";

// import react-router-dom
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Link,
} from "react-router-dom";

// Función del router
function App() {
  const [currentuser, setCurrentuser] = React.useState("empty");

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/", { withCredentials: true })
      .then((response) => {
        setCurrentuser(response.data);
      });
  }, []);

  if (currentuser === "empty") {
    return (
      <div>
        <GlobalStyle />
        <header>
          <div className="navBar">
            <BrowserRouter>
              <NavBar>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/restaurants">Restaurants</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              </NavBar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants/:id" element={<Restaurant />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </BrowserRouter>
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <GlobalStyle />
        <header>
          <div className="navBar">
            <BrowserRouter>
              <NavBar>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/restaurants">Restaurants</Link>
                  </li>
                  <li>
                    <Link to="/restaurants/create">Registrar restaurante</Link>
                  </li>
                  <li>
                    <Link to="/signout">Signout</Link>
                  </li>
                  <li>
                    <Link to="/deleteuser">Delete account</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
              </NavBar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants/:id" element={<Restaurant />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route
                  path="/restaurants/create"
                  element={<RestaurantCreate />}
                />
                <Route path="/signout" element={<Signout />} />
                <Route path="/deleteuser" element={<Deleteuser />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/:userid" element={<Edituser />} />
              </Routes>
            </BrowserRouter>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

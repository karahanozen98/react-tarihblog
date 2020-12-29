import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import Header from "./components/Header/Header.js";
import { NavbarComponents } from "./components/Header/NavbarComponents.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Categories from "./components/Categories/Categories.js";
import Login from "./components/Login/Login.js";
import Admin from "./components/Admin/Admin.js";
import GotoCategory from "./components/Categories/GotoCategory.js";
import Unauthorized from "./components/Unauthorized/Unauthorized.js";
import Loading from "./components/Home/Loading.js";
import Footer from "./components/Footer/Footer.js";
import axios from "axios";

import "./App.css";

function App() {
  const [user, setUser] = useState(false); // State for user to log in and out
  const [loading, setLoading] = useState(true);
  const [Data, setData] = useState([]); // posts

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get("/api/subjects/");
      setData(result.data);
    };

    fetchData();
    setLoading(false);
  }, []);

  // function when user logs out
  function handleLogout(event) {
    setUser(false);
    NavbarComponents.pop(); // Remove Admin page in Navbar
    NavbarComponents.pop(); // Change Log out to Log in in Navbar
    NavbarComponents.push(
      <li key="login">
        <Link to="/login">Giriş Yap</Link>
      </li>
    );
  }
  // function when user logs in
  function handleLogin(event) {
    event.preventDefault();
    setUser(true);
    NavbarComponents.pop(); // Remove Login element in navbar
    // and add a new Log out element because user is logged in!
    NavbarComponents.push(
      <li key="admin">
        <Link to="/admin">Yönetim Sayfası</Link>
      </li>,
      <li key="logout">
        <Link to="/" onClick={handleLogout}>
          Çıkış Yap
        </Link>
      </li>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          {loading ? (
            <Loading></Loading>
          ) : (
            <Route
              exact
              path="/"
              component={() => <Home Data={Data} user={user} />}
            />
          )}
          <Route exact path="/about" component={() => <About />} />
          <Route
            exact
            path="/categories"
            component={() => <Categories Data={Data} />}
          />
          <Route
            exact
            path="/categories/:categoryName"
            component={() => <GotoCategory Data={Data} user={user} />}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                user={user.toString()}
                handleLogin={handleLogin}
              />
            )}
          />
          <ProtectedRoute exact path="/admin" user={user} component={Admin} />
          <Route exact path="/unauthorized" component={Unauthorized} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;

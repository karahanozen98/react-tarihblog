import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./Login.css";

function Login(props) {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/users/");
      setUsers(result.data);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name } = event.target;
    if (name === "userName") setUserName(event.target.value);
    else if (name === "password") setPassword(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();

    for (let i = 0; i < users.length; i++) {
      if (userName === users[i].username && password === users[i].password) {
        props.handleLogin(event);
        history.push("/admin");
      }
    }
    setErrorMessage("Yanlış kullanıcı adı veya şifre!");
  };

  return (
    <div className="login-wrapper">
      <form className="login">
        <h3>Giriş Yap</h3>
        <p style={{ color: "#9d0208" }}>{errorMessage}</p>
        <input
          name="userName"
          value={userName}
          type="text"
          placeholder="Kullanıcı adı"
          onChange={handleChange}
        ></input>
        <br></br>
        <input
          name="password"
          value={password}
          type="password"
          placeholder="Şifre"
          onChange={handleChange}
        ></input>
        <br></br>
        <input type="button" value="Giriş Yap" onClick={handleClick}></input>
      </form>
    </div>
  );
}

export default Login;

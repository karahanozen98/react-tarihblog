import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import axios from "axios";
import { CloseOutlined } from "@material-ui/icons";
import { DeleteOutline } from "@material-ui/icons";

import "./UserComponent.css";

function ListUsersComponent(props) {
  const handleDeleteUser = (event) => {
    var answer = window.confirm("Silmek istediğinden emin misin?");
    if (answer) {
      axios
        .delete("/api/users/" + props.user._id)
        .then((res) => {
          alert("Kullanıcı başarıyla silindi.");
        })
        .catch((err) => {
          alert("Bir hata oluştu." + err);
        });
    } else {
    }
  };

  return (
    <div>
      <table className="UsersTable">
        <tbody>
          <tr>
            <td>{props.user.username}</td>
            <td>{props.user.password}</td>
            <td>{props.user.createdAt}</td>
            <td>
              <DeleteOutline
                className="UserDeleteIcon"
                onClick={handleDeleteUser}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function NewUserComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "userName") setUserName(value);
    else if (name === "password") setPassword(value);
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    if (userName.length <= 7 || password.length <= 7)
      alert(
        "Gerekli tüm alanlar doldurulmalı!\nKullanıcı adı ve şifre en az 8 karakter olmalı!"
      );
    else {
      var temp = {
        username: userName,
        password: password,
      };

      axios.post("/api/users/add", temp);
      alert("Yeni kullanıcı başarıyla eklendi.");
    }
  };

  return (
    <div className="new-user-component">
      <h3>Yeni Kullanıcı</h3>
      <form className="new-user-form">
        <input
          name="userName"
          type="text"
          placeholder="Kullanıcı Adı"
          onChange={handleChange}
        ></input>
        <br></br>
        <input
          name="password"
          type="text"
          placeholder="Şifre"
          onChange={handleChange}
        ></input>
        <br></br>
        <input
          className="Add-user-Button"
          type="button"
          value="Ekle"
          onClick={handleAddUser}
        ></input>
      </form>
    </div>
  );
}

export default function UsersComponent(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/users/");
      setUsers(result.data);
    };
    fetchData();
  }, []);

  var userData = users.map((user) => (
    <ListUsersComponent key={user._id} user={user} />
  ));
  return (
    <div>
      <div className="Users">
        <CloseOutlined
          style={{ position:"relative", clear:"both", float: "right" }}
          onClick={props.handleClearChoice}
        />
        <table className="UsersTable">
          <tbody>
            <tr>
              <th>Kullanıcı Adı</th>
              <th>Şifre</th>
              <th>Oluşturma Tarihi</th>
              <th>Sil</th>
            </tr>
          </tbody>
        </table>
        {userData}
      </div>
      {<NewUserComponent key="addnewuser"></NewUserComponent>}
    </div>
  );
}

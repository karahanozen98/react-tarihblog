import React from "react";
import axios from "axios";
import AddNewSubjectComponent from "./AddNewSubjectComponent.js";
import UsersComponent from "./UsersComponent.js";

import "./Admin.css";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoText: "Yeni Konu Ekle",
      renderComponent: null,
      formVisibility: "hidden",
      category: "",
      title: "",
      url: "",
      text: "",
      history: props.history,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.toString(),
      infoText: "Yeni Konu Ekle",
    });
  };

  handleRedirect = (event) => {
    if (event.target.name === "newSubject") {
      this.setState({
        renderComponent: (
          <AddNewSubjectComponent
            state={this.state}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleClearChoice={this.handleClearChoice}
          />
        ),
      });
    } else if (event.target.name === "editSubject") {
      this.state.history.push("/");
    } else if (event.target.name === "editUsers") {
      this.setState({
        renderComponent: (
          <UsersComponent handleClearChoice={this.handleClearChoice} />
        ),
      });
    }
  };
  handleClearChoice = () => {
    this.setState({ renderComponent: null });
  };

  handleClick = (event) => {
    event.preventDefault();
    if (
      this.state.title === "" ||
      this.state.category === "" ||
      this.state.text === ""
    )
      alert("Gerekli tüm alanlar doldurulmalı!");
    else {
      var temp = {
        category: this.state.category,
        title: this.state.title,
        url: this.state.url,
        text: this.state.text,
        date:
          new Date().getDay() +
          "." +
          new Date().getMonth() +
          "." +
          new Date().getFullYear(),
      };
      axios.post("/api/subjects/add", temp);
      this.setState({ infoText: "Yeni konu başarıyla eklendi" });
      alert("Yeni konu başarıyla eklendi.");
    }
  };

  render() {
    return (
      <div className="Admin-Page">
        <input
          className="Admin-Button"
          name="newSubject"
          type="button"
          value="Yeni konu ekle"
          onClick={this.handleRedirect}
        ></input>
        <input
          className="Admin-Button"
          name="editSubject"
          type="button"
          value="Başlıkları Düzenle ve Sil"
          onClick={this.handleRedirect}
        ></input>
        <input
          className="Admin-Button"
          name="editUsers"
          type="button"
          value="Kullanıcıları Düzenle ve Sil"
          onClick={this.handleRedirect}
        ></input>
        {this.state.renderComponent}
      </div>
    );
  }
}
export default Admin;

import React from "react";
import { CloseOutlined } from "@material-ui/icons";
import "./Admin.css";

function AddNewSubjectForm(props) {
  return (
    <form className="Form">
      <CloseOutlined className="Icon" onClick={props.handleClearChoice} />
      <h3>{props.state.infoText}</h3>
      <input
        name="category"
        type="text"
        placeholder="Yazının Kategorisi (ör. Osmanlı Tarihi, İnkılap Tarihi vb.)"
        onChange={props.handleChange}
      ></input>
      <br></br>
      <input
        name="title"
        type="text"
        placeholder="Yazı Başlığı (ör. Mustafa Kemal Atatürk kimdir?)"
        onChange={props.handleChange}
      ></input>
      <br></br>
      <input
        name="url"
        type="text"
        placeholder="Görsel (url adresi ör. https://ornekresim.jpg)"
        onChange={props.handleChange}
      ></input>
      <br></br>
      <textarea
        name="text"
        type="text"
        placeholder="İçerik"
        onChange={props.handleChange}
      ></textarea>
      <input
        className="Admin-Button"
        type="button"
        value="Yeni konu ekle"
        onClick={props.handleClick}
      ></input>
    </form>
  );
}

export default AddNewSubjectForm;

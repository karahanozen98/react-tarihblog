import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { DeleteOutline } from "@material-ui/icons";
import "./Card.css";

function CardComponent(props) {
  var history = useHistory();
  const [logoVisibility, setVisibility] = useState("hidden");

  function handleDelete() {
    var answer = window.confirm("Silmek istediğinden emin misin?");
    if (answer) {
      axios
        .delete("/api/subjects/" + props.item._id)
        .then((res) => {
          alert("Başlık başarıyla silindi.");
          history.push("/");
        })
        .catch((err) => {
          alert("Bir hata oluştu." + err);
        });
    } else {
    }
  }

  useEffect(() => {
    if (props.user) {
      setVisibility("visible");
    } else {
      setVisibility("hidden");
    }
  }, [props.user]);

  return (
    <div className="card">
      <DeleteOutline
        className="Icons"
        style={{ visibility: logoVisibility }}
        onClick={handleDelete}
      />
      <h3>{props.item.title}</h3>
      {props.item.url === "" ? null : (
        <img
          className="CardPicture"
          src={props.item.url}
          alt={""}
          height="300"
          width="200"
        ></img>
      )}

      <p>{props.item.text}</p>
    </div>
  );
}

export default CardComponent;

import React from "react";
import {useHistory} from "react-router-dom"
import "./Categories.css";

function CategoryComponent(props) {
  let history=useHistory();
  const handleClick = (event) =>  { 
    history.push("/categories/"+props.item.categoryName)
  };

  return (
    <div className="Card" onClick={handleClick}>
      <h3>{props.item.categoryName}</h3>
      <span>
        {"Bu başlık altında açılan " + props.item.nOfSubjects + " konu var "}
      </span>
    </div>
  );
}

export default CategoryComponent;

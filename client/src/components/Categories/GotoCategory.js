import React from "react";
import { useLocation } from "react-router-dom";
import CardComponent from "./../Home/CardComponent.js";

export default function GotoCategory(props) {
  window.scrollTo(0, 0);
  let location = useLocation();
  let currLocation = location.pathname.split("/")[2];

  const filteredArr = props.Data.filter(
    (item) => item.category === currLocation
  );

  const cardComponents = filteredArr
    .slice(0)
    .reverse()
    .map((item) => (
      <CardComponent
        key={item._id}
        item={item}
        user={props.user}
      ></CardComponent>
    ));

  return <div>{cardComponents}</div>;
}

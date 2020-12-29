import React, { useState, useEffect, useRef } from "react";
import CardComponent from "./CardComponent.js";

function Home(props) {
  const latestProps = useRef(props);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArr, setFilteredArr] = useState(latestProps.current.Data);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setFilteredArr(
      latestProps.current.Data.filter((item) =>
        item.title.toUpperCase().includes(searchTerm.toUpperCase())
      )
    );
  }, [searchTerm]);

  var cardComponents = filteredArr
    .slice(0)
    .reverse()
    .map((item) => (
      <CardComponent key={item._id} item={item} user={props.user} />
    ));

  return (
    <div style={{minHeight:"100vh"}}>
      <input
        name="searchTerm"
        type="text"
        placeholder="Arama"
        value={searchTerm}
        style={{ margin: "15px", fontSize:"1.1em"}}
        onChange={handleChange}
      ></input>
      {cardComponents}
    </div>
  );
}
export default Home;

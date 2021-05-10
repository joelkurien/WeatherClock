import React from "react";

function Card(props){
  return(
    <div className="weatherContent">
      <h2>{props.place}</h2>
      <img className="weatherImage" src="images/sunny.png" alt="sunny" />
      <h3>69</h3>
      <p>pepeD/swagD</p>
    </div>
  )
}

export default Card;

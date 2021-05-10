import React from "react";
import Heading from "./Heading";
import InputContent from "./InputContent";
import Card from "./Card";

function App() {
  let [content, setContent] = React.useState([]);

  function addChange(newPlace){
    setContent(prevValue => {
      return [ ...prevValue, newPlace ];
    });
    console.log(content);
  }

  return (
    <div className="container-fluid">
      <div className="header">
        <Heading />
        <InputContent onAdd={addChange} />
      </div>
      {content.map(data => {
        return <Card place={data}/>
      })}
    </div>
  );
}

export default App;

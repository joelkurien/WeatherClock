import React from "react";
import Heading from "./Heading";
import SearchIcon from '@material-ui/icons/Search';

function App() {
    return (
    <div className="header container-fluid">
      <Heading />
      <form className="locationDataForm" method="post" action="/">
        <textarea className="locationInputBox" type='text' placeholder='Enter city or country' />
        <button className="locationButton"><SearchIcon style={{color: "darkgray"}}/></button>
      </form>
    </div>
  );
}

export default App;

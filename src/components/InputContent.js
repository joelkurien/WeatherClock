import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function InputContent(props){
  let [places, setPlaces] = React.useState("");

  function handleChange(event){
    let values = event.target.value;
    setPlaces(values);
  }

  function addChange(event){
    props.onAdd(places);
    setPlaces("");
    event.preventDefault();
  }

  return(
    <form className="locationDataForm" onSubmit={addChange}>
      <textarea className="locationInputBox" type='text' onChange={handleChange} value={places} placeholder='Enter city or country' />
      <button className="locationButton" type='submit'><SearchIcon style={{color: "darkgray"}}/></button>
    </form>
  )
}

export default InputContent;

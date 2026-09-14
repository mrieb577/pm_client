import { SetStateAction, useEffect, useState } from "react";
import { Plant, PlantParameter } from "../../data/plant";
import GetRequestHeaders from "../request_headers";
import axios from "axios";

export function AddPlantForm({ pd } : PlantParameter){
  pd = pd as Plant;
  const [expanded, setExpanded] = useState(false);

  const [state, setState] = useState({});

  useEffect(() => {
    setState({ ...state, ['plant_id']: pd?.plant_id});
  }, []);

  function handleChange(event : any){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({ ...state, [name]: value });
  }

  function handleSubmit(event : any){
    event.preventDefault();
    console.log(state);

    var headers = GetRequestHeaders();
    axios.post("http://localhost:8080/plants/add", state, {...headers}).then((response) => {
      console.log(response);
    }).catch((err) => {console.error(err.message)});
  }

  if(!expanded){
    return (<div>
      <button onClick={() => {
        setExpanded(true);
      }}>Add this Plant</button>
    </div>);
  } else {
    return (<div>
      <h3 className="title">Add this plant:</h3>
      <div> Species: <i>{pd.scientific_name}</i>: {pd.common_name} ({pd.symbol})</div>
      <form onSubmit={handleSubmit}>
        <label> Nickname: <input type="text" name="nickname" onChange={handleChange} /> </label> <br/>
        <label> Date Acquired: <input type="date" name="dateAcquired" onChange={handleChange} /> </label> <br/>
        <label> Where is this plant located? <input type="text" name="location" onChange={handleChange} /> </label>
        <label> Indoor? <input type="checkbox" name="isIndoor" onChange={handleChange} /> </label> <br/>
        <div>
          <label> Last Watered: <input type="date" name="lastWatered" onChange={handleChange} /> | </label>
          <label> Water Interval: <input type="number" name="waterInterval" onChange={handleChange} /> days | </label>
          <label> Water Amount (mL): <input type="number" name="waterAmount" onChange={handleChange} /> </label>
        </div>
        <div>
          <label> Last Fertilized: <input type="date" name="lastFertilized" onChange={handleChange} /> | </label>
          <label> Fertilizer Interval: <input type="number" name="fertilizerInterval" onChange={handleChange} /> days </label>
        </div>
        <label> Notes: <br/> <textarea defaultValue="Any notes go here..." name="notes" onChange={handleChange} /> </label> <br />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => {
        setExpanded(false);
      }}>Cancel</button>
    </div>)
  }
}

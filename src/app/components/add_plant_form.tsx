import { SetStateAction, useState } from "react";
import { Plant, PlantParameter } from "../data/plant";

export function AddPlantForm({ pd } : PlantParameter){
  pd = pd as Plant;
  const [expanded, setExpanded] = useState(false);

  const [state, setState] = useState({});

  function handleChange(event : any){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({ ...state, [name]: value });
  }

  function handleSubmit(event : any){
    event.preventDefault();
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
        <label> Indoor? <input type="checkbox" name="isIndoor" onChange={handleChange} /> </label> <br/>
        <div>
          <label> Last Watered: <input type="date" name="lastWatered" onChange={handleChange} /> </label>
          <label> Water Interval: <input type="number" name="waterInterval" onChange={handleChange} /> </label>
          <label> Water Amount (mL): <input type="number" name="waterAmount" onChange={handleChange} /> </label>
        </div>
        <div>
          <label> Last Fertilized: <input type="date" name="lastFertilized" onChange={handleChange} /> </label>
          <label> Fertilizer Interval: <input type="number" name="fertilizerInterval" onChange={handleChange} /> </label>
        </div>
        <label> Notes: <br/> <textarea value="Any notes go here..." onChange={handleChange} /> </label> <br />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => {
        setExpanded(false);
      }}>Cancel</button>
    </div>)
  }
}

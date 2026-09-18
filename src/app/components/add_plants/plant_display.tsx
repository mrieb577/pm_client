import type { Plant, PlantParameter } from "../../data/plant";
import "./plant_display.css"

export default function PlantDisplay({ pd } : PlantParameter){
  let searchName = pd?.scientific_name.split(" ", 2).join("_");

  if(pd != null){
    return(<div>
      <h3> <b>{pd.category}</b> </h3>
      <p>
        <b>{pd.family}</b> <br/>
        <i>{pd.scientific_name}</i>: {pd.common_name} <br/>
        <br/>
        Difficulty: <span className={`difficulty${pd.care_difficulty}`}>{pd.care_difficulty}<br/></span>
        Water requirement: <span className="waterRequirement">Every {pd.watering_interval_days} days<br/></span>
        Sun requirement: <span className="sunRequirement">{pd.light}<br/></span>
        <br/>
        Description: <br/>
        {pd.description} <br/> <br/>
        <a href={`https://en.wikipedia.org/wiki/${searchName}`} target="_blank" rel="noopener noreferrer">
          <button>View on Wikipedia</button>
        </a>
      </p>
    </div>);
  } else {
    return (<div>

    </div>)
  }
}

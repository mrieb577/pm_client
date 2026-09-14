import { Plant } from "../../data/plant";

interface UserPlantParams {
  key: number,
  plant: Plant
}

export default function UserPlant({ key, plant } : UserPlantParams){
  return (
    <div className="userPlant" key={key}>
      <p>
        <b>{plant.family}</b> <br/>
        <i>{plant.scientific_name}</i>: {plant.common_name} <br/>
        Symbol: {plant.symbol}
        <br/> <br/>
        Water requirement: <span className="waterRequirement">{plant.water_requirement}<br/></span>
        Sun requirement: <span className="sunRequirement">{plant.sun_requirement}<br/></span>
        <br/>
      </p>
    </div>
  );
}

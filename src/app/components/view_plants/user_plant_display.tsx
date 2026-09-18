import { useState } from "react";
import { UserPlant } from "../../data/user_plant";
import "./user_plant_display.css";

interface UserPlantParams {
  key: number,
  plant: UserPlant
}

export default function UserPlantDisplay({ key, plant } : UserPlantParams){
  const [editing, setEditing] = useState(false);

  return (
    <div className="userPlant" key={key}>
      <h3 className="nickname">{plant.nickname}</h3>
      <p>
        Owned since: <span className="dateAcquired">{plant.dateAcquired}<br/></span>

        <br/>
        Water interval: <span className="waterRequirement">Every {plant.waterInterval} days<br/></span>
        Water amount: <span className="waterRequirement">{plant.waterAmount} mL<br/></span>
        Last watered: <span className="waterRequirement">{plant.lastWatered}<br/></span>
        Water due in: <span className="waterRequirement">TODO days<br/></span>
        <br/>
        Fertilizer interval: <span className="fertilizerRequirement">Every {plant.fertilizerInterval} days<br/></span>
        Last fertilized: <span className="fertilizerRequirement">{plant.lastFertilized}<br/></span>
        Fertilizer due in: <span className="fertilizerRequirement">TODO days<br/></span>
        <br/>
        Location: <span className="location">{plant.location}<br/></span>
        Notes: <span className="notes">{plant.notes}<br/></span>
        <br/>
        Actions: <br/>
        <span className="actions">
          <button>Water</button>
          <button>Fertilize</button>
          <button>Edit</button>
          <button>Delete</button>
        <br/></span>
      </p>
    </div>
  );
}

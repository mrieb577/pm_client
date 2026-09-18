import { UserPlant } from "../../data/user_plant";
import UserPlantDisplay from "./user_plant_display";

interface PlantListParams {
  plants : UserPlant[] | null
}

export default function PlantList({ plants } : PlantListParams){
  return (
    <div>
      {
        plants && plants.length > 0 ? (
          plants.map((plant, index) => (
            <UserPlantDisplay key={index} plant={plant} />
          ))
        ) : (
          <p>No plants to display</p>
        )
      }
    </div>
  )
}

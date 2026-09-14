import { Plant } from "../../data/plant";
import UserPlant from "./user_plant";

interface PlantListParams {
  plants : Plant[] | null
}

export default function PlantList({ plants } : PlantListParams){
  return (
    <div>
      {
        plants && plants.length > 0 ? (
          plants.map((plant, index) => (
            <UserPlant key={index} plant={plant} />
          ))
        ) : (
          <p>No plants to display</p>
        )
      }
    </div>
  )
}

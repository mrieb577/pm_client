import { useState } from "react";
import PlantList from "./plant_list";
import { Plant } from "../../data/plant";

export default function MyPlantsPage(){
  const [plants, setPlants] = useState<Plant[]>([]);

  return (
    <div>
      <h1>My Plants</h1>
      <PlantList plants={plants} />
    </div>
  )
}

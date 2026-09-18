import { useEffect, useState } from "react";
import PlantList from "./plant_list";
import axios from "axios";
import GetRequestHeaders from "../request_headers";
import { UserPlant } from "../../data/user_plant";

export default function MyPlantsPage(){
  const [plants, setPlants] = useState<UserPlant[]>([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const headers = GetRequestHeaders();
      const response = await axios.get("http://localhost:8080/user/plants/get", {...headers});
      console.log("Fetched plants:", response.data);
      setPlants(response.data);
    };
    fetchPlants();
  }, []);

  return (
    <div>
      <h1>My Plants</h1>
      <PlantList plants={plants} />
    </div>
  )
}

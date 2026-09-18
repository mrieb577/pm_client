import axios from "axios";
import { useState } from "react";
import PlantDisplay from "./plant_display";
import type { Plant } from "../../data/plant";
import "./plant_search_form.css"
import { AddPlantForm } from "./add_plant_form";
import GetRequestHeaders from "../request_headers";

export default function PlantSearchForm(){
  const [message, setMessage] = useState("");
  const [results, setResults] = useState<Plant[]>([]);
  const [resultSize, setResultSize] = useState(0);
  const [search, setSearch] = useState("");

  const [resultIndex, setResultIndex] = useState(0);

  function makeServerRequest(value = search){
    setMessage("");
    const headers = GetRequestHeaders();
    axios.get(`http://localhost:8080/plants/search?val=${value}`, {...headers}).then((response) => {
      setResults(response.data.results as Plant[]);
      setResultSize(response.data.count);
      setResultIndex(0);
    }).catch((err) => {setMessage(err.message)});
  }

  return (<div>
      { resultSize > 0 &&
        <div>
          <p>{message} </p>
          <PlantDisplay pd={results ? results[resultIndex] : null}></PlantDisplay>
          <button onClick={() => { // move backward in the plant list
            if(resultIndex > 0) setResultIndex(resultIndex - 1);
            if(resultIndex <= 0) setResultIndex(resultSize - 1);
          }}>&lt;&lt;</button>
          <span className="resultIndex">{resultIndex + 1}/{resultSize}</span>
          <button onClick={() => { // move forward in the plant list
            if(resultIndex < resultSize) setResultIndex(resultIndex + 1);
            if(resultIndex >= resultSize - 1) setResultIndex(0);
          }}>&gt;&gt;</button>
          <br /> <br />
          <AddPlantForm pd={results ? results[resultIndex] : null}></AddPlantForm>
        </div>
      }

      <p className="title">Search</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        const input = e.currentTarget.elements.namedItem("plant-search") as HTMLInputElement | null;
        const nextSearch = input?.value ?? "";
        setSearch(nextSearch);
        makeServerRequest(nextSearch);
      }}>
        <input name="plant-search" type="text" placeholder="Search for a plant" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

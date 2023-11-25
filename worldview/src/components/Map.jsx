import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const [serachParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = serachParams.get("lat");
  const lng = serachParams.get("lng");

  const handlebutton = () => {
    setSearchParams({ lat: 25, lng: 40 });
  };
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map {lat} {lng}
      <button onClick={handlebutton}>click me</button>
    </div>
  );
}

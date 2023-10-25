import { useParams, useSearchParams } from "react-router-dom";
import styles from "./map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <span>Position: {lat}, </span>
      <span>{lng}</span>
      <button onClick={()=> setSearchParams({lat: 23, lng: 50})}>Change Position</button>
    </div>
  );
}

export default Map;

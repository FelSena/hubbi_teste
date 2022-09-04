import { useEffect, useState } from "react";
import API from "../../API/API";
import { Cards } from "../../Cards";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isMouted, setIsMounted] = useState(false);

  console.log(vehicles);
  useEffect(() => {
    API.get("vehicles").then((res) => {
      setVehicles(res.data.results);
      setIsMounted(true);
    });
  }, []);

  return (
    <div>
      <span>Vehicles page</span>

      {isMouted &&
        vehicles.map((item, index) => <Cards key={index} item={item} />)}
    </div>
  );
};

export default Vehicles;

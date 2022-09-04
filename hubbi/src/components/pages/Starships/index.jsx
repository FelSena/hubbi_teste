import { useEffect, useState } from "react";
import API from "../../API/API";
import { Cards } from "../../Cards";

const Starship = () => {
  const [starships, setStarships] = useState([]);
  const [isMouted, setIsMounted] = useState(false);

  console.log(starships);
  useEffect(() => {
    API.get("starships").then((res) => {
      setStarships(res.data.results);
      setIsMounted(true);
    });
  }, []);

  return (
    <div>
      <span>Starship page</span>
      {isMouted &&
        starships.map((item, index) => <Cards key={index} item={item} />)}
    </div>
  );
};

export default Starship;

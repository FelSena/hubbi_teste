import { useEffect, useState } from "react";
import API from "../../API/API";
import { Cards } from "../../Cards";

const People = () => {
  const [people, setPeople] = useState([]);
  const [isMouted, setIsMounted] = useState(false);

  console.log(people);
  useEffect(() => {
    API.get("people").then((res) => {
      setPeople(res.data.results);
      setIsMounted(true);
    });
  }, []);

  return (
    <div>
      <span>People page</span>

      {isMouted &&
        people.map((item, index) => <Cards key={index} item={item} />)}
    </div>
  );
};

export default People;

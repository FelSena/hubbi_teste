import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import API from "../../API/API";
import { Cards } from "../../Cards";
import { ItemsDiv } from "./style";

const People = () => {
  const [people, setPeople] = useState([]);
  const [isMouted, setIsMounted] = useState(false);

  useEffect(() => {
    API.get("people").then((res) => {
      setPeople(res.data.results);
      setIsMounted(true);
    });
  }, []);

  return (
    <ItemsDiv>
      {isMouted &&
        people.map((item, index) => (
          <Cards key={index} item={item} color="#007e06" />
        ))}
      <Button></Button>
    </ItemsDiv>
  );
};

export default People;

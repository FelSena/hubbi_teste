import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Cards } from "../Cards";
import API, { clearBaseUrl } from "../API/API";
import { DefaultDiv } from "./style";

const PageItems = ({ type }) => {
  console.log(type);
  const [list, setList] = useState([]);
  const [next, setNext] = useState(null);
  const [previus, setPrevius] = useState(null);
  const [isMouted, setIsMounted] = useState(false);
  const [color, setColor] = useState(null);

  useEffect(() => {
    API.get(type).then((res) => {
      setList(res.data.results);
      res.data.next ? setNext(res.data.next) : setNext(null);
      res.data.previous ? setPrevius(res.data.previous) : setPrevius(null);
      setIsMounted(true);
      colorSelector(type);
    });
  }, []);

  const nextPage = () => {
    setIsMounted(false);
    API.get(clearBaseUrl(next)).then((res) => {
      res.data.next ? setNext(res.data.next) : setNext(null);
      res.data.previous ? setPrevius(res.data.previous) : setPrevius(null);
      setList(res.data.results);
      setIsMounted(true);
    });
  };

  const previusPage = () => {
    setIsMounted(false);
    API.get(clearBaseUrl(previus)).then((res) => {
      res.data.next ? setNext(res.data.next) : setNext(null);
      res.data.previous ? setPrevius(res.data.previous) : setPrevius(null);
      setList(res.data.results);
      setIsMounted(true);
    });
  };

  const colorSelector = (type) => {
    switch (type) {
      case "people":
        setColor("#007e06");
        break;
      case "vehicles":
        setColor("#a8cc06");
        break;
      case "starships":
        setColor("#106AE0");
        break;
    }
  };

  return (
    <DefaultDiv>
      {isMouted &&
        list.map((item, index) => (
          <Cards key={index} item={item} color={color} />
        ))}
      {previus && (
        <Button
          variant="contained"
          sx={{ background: { color } }}
          onClick={previusPage}
        >
          Anterior
        </Button>
      )}
      {next && (
        <Button
          variant="contained"
          sx={{ background: { color } }}
          onClick={nextPage}
        >
          Proxima
        </Button>
      )}
    </DefaultDiv>
  );
};

export default PageItems;

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import InformationsBox from "../../InformationsBox";

const Informations = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") !== null && setAuth(true);
  }, []);
  return <div>{auth ? <InformationsBox /> : <Box> Nao logado</Box>}</div>;
};

export default Informations;

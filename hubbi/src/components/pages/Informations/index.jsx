import { useEffect, useState } from "react";
import InformationsBox from "../../InformationsBox";

const Informations = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") !== null && setAuth(true);
  }, []);
  return <div>{auth ? <InformationsBox /> : <span>Nao logado</span>}</div>;
};

export default Informations;

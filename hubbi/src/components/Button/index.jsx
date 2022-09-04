import { useContext } from "react";
import { InformationsContext } from "../providers/InformationsProvider";
import { useNavigate } from "react-router-dom";

export const Button = ({ item }) => {
  const { setCurrentItem } = useContext(InformationsContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentItem(item);
    navigate("/informations", { replace: true });
  };

  return <button onClick={handleClick}>Ver Mais</button>;
};

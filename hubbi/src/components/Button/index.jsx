import { useContext } from "react";
import { InformationsContext } from "../providers/InformationsProvider";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./style";

export const Button = ({ item }) => {
  const { setCurrentItem } = useContext(InformationsContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentItem(item);
    navigate("/informations", { replace: true });
  };

  return <StyledButton onClick={handleClick}>Ver Mais</StyledButton>;
};

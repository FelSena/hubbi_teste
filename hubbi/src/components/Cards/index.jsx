import { Button } from "../Button";
import { StyledCard } from "./style";

export const Cards = ({ item, color }) => {
  return (
    <StyledCard color={color}>
      <span>{item.name}</span>
      <Button item={item} />
    </StyledCard>
  );
};

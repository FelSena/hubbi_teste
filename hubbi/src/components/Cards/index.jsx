import { Button } from "../Button";

export const Cards = ({ item }) => {
  return (
    <div>
      <span>{item.name}</span>
      <Button item={item} />
    </div>
  );
};

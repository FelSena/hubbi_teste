import { TableRow } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InformationsContext } from "../providers/InformationsProvider";

const InformationsBox = () => {
  const { currentItem } = useContext(InformationsContext);
  const navigate = useNavigate();
  console.log(currentItem);
  useEffect(() => {
    currentItem.name ?? navigate("/", { replace: true });
  }, []);
  return (
    <div>
      {Object.keys(currentItem)
        .slice(0, 8)
        .map((item, index) => (
          <>
            <TableRow key={index}>
              <b>{item}</b>
            </TableRow>
            <TableRow>{currentItem[item]}</TableRow>
          </>
        ))}
    </div>
  );
};

export default InformationsBox;

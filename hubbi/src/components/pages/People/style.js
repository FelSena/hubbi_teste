import styled from "@emotion/styled";
import brackground from "../../assets/background_01.png";

export const ItemsDiv = styled.div`
  background-image: url(${brackground});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  box-sizing: border-box;
  gap: 10px;
  padding: 5% 20%;
  box-sizing: border-box;
`;

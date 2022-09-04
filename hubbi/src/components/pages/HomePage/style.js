import styled from "@emotion/styled";
import brackground from "../../assets/background_02.png";

export const HomeDiv = styled.div`
  background-image: url(${brackground});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 20%;
  box-sizing: border-box;
`;

export const LinkContainer = styled.div`
  width: 172px;
  height: 56px;
  border: 1px solid #717171;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #ec3137;
  }
`;

import styled from "@emotion/styled";

export const StyledCard = styled.div`
  width: 200px;
  height: 125px;
  border: 1px solid #717171;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  &:hover {
    background-color: ${(props) => props.color};
  }
`;

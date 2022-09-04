import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
	--red: #EC3137;
    --blue: #106AE0;
    --gray1: #4D4D4D;
    --gary2: #717171;
}
`;
export default GlobalStyle;

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const StyledHref = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #ec3137;
  }
`;

export const ThemeH3 = styled.h3`
  color: white;
`;

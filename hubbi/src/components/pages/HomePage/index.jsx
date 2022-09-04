import { StyledLink } from "../../styles/globals";
import { LinkContainer, HomeDiv } from "./style";

const HomePage = () => {
  return (
    <HomeDiv>
      <StyledLink to="/people">
        <LinkContainer>Personagens</LinkContainer>
      </StyledLink>

      <StyledLink to="/starships">
        <LinkContainer>Naves</LinkContainer>
      </StyledLink>

      <StyledLink to="/vehicles">
        <LinkContainer>Veiculos</LinkContainer>
      </StyledLink>
    </HomeDiv>
  );
};

export default HomePage;

import { StyledHref, ThemeH3 } from "../styles/globals";
import { StyledFooter } from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <ThemeH3>Desenvolvido por:</ThemeH3>
      <StyledHref href="https://www.linkedin.com/in/felipeasena/">
        Felipe Sena
      </StyledHref>
    </StyledFooter>
  );
};

export default Footer;

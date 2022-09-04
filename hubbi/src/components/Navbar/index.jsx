import { Link } from "react-router-dom";
import { StyledLink } from "../styles/globals";
import { StyledNavbar } from "./style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/people">Personagens</StyledLink>
      <StyledLink to="/starships">Naves</StyledLink>
      <StyledLink to="/vehicles">Veiculos</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;

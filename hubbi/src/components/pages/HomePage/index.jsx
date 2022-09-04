import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <span>Home page</span>
      <ul>
        <Link to="/people">Personagens</Link>
        <Link to="/starships">Naves</Link>
        <Link to="/vehicles">Veiculos</Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
};

export default HomePage;

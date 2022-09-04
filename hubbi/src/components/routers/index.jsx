import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Informations from "../pages/Informations";
import Login from "../pages/Login";
import People from "../pages/People";
import Starship from "../pages/Starships";
import Vehicles from "../pages/Vehicles";

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/people" element={<People />} />
      <Route path="/starships" element={<Starship />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/informations" element={<Informations />} />
    </Routes>
  );
};
export default MainRoutes;

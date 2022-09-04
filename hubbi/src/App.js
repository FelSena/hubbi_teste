import "./App.css";
import MainRoutes from "./components/routers";
import { InformationsProvider } from "./components/providers/InformationsProvider";

function App() {
  return (
    <InformationsProvider>
      <MainRoutes />
    </InformationsProvider>
  );
}

export default App;

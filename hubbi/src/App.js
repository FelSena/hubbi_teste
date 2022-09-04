import MainRoutes from "./components/routers";
import { InformationsProvider } from "./components/providers/InformationsProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalStyle, { MainDiv } from "./components/styles/globals";

function App() {
  return (
    <InformationsProvider>
      <MainDiv>
        <Navbar />
        <MainRoutes />
        <Footer />
      </MainDiv>
      <GlobalStyle />
    </InformationsProvider>
  );
}

export default App;

import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HeaderPage from "./pages/HeaderPage";
import Join from "./pages/Join";
import Footer from "./components/footer/Footer";
import Welcome from "./components/Welcome";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <HeaderPage />
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact={true} element={<Welcome />} />
        <Route path="/join" exact={true} element={<Join />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

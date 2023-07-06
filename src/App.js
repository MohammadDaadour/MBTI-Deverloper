import "./App.css";
import { React } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CognitiveFunctions from "./components/CognitiveFunctions";
import AllFunctions from "./components/AllFunctions";
import ScrollToTop from "./components/ScrollTop";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/functions" element={<CognitiveFunctions />} />
            <Route path="/allFunctions/:id" element={<AllFunctions />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./styles/main.scss";

import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Clima from "./pages/Clima/Clima";
import Parking from "./pages/Parking/Parking";
import Provincia from "./pages/Provincia/Provincia";
// import Municipio from "./pages/Municipio/Municipio";




function App() {
  return (
    <div>
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Clima />} />
        <Route path="parking" element={<Parking />} />
        <Route path="provincia/:CodProv" element={<Provincia />}/>
        {/* <Route path="municipio/:id" element={<Municipio />}/> */}
      </Routes>

    </Router>
    </div>
  );
}

export default App;

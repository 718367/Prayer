import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Mwakit from "./components/Mwakit/Mawakit";
import Start from "./components/Start/Start.jsx";
import Adhkar from "./components/Adhkar/Adhkar.jsx";
import About from "./components/About/About.jsx";
import Ahkam from "./components/Ahkam/Ahkam.jsx";
import { Route,Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Header />
        <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/mwakit" element={<Mwakit />} />
        <Route path="/azkar" element={<Adhkar />} />
        <Route path="/ahkam" element={<Ahkam />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;

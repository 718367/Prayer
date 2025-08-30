import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Mwakit from "./components/Mawakit.jsx";
import Start from "./components/Start.jsx";
import Adhkar from "./components/Adhkar.jsx";
import About from "./components/About.jsx";
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
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;

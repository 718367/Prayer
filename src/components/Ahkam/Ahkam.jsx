import { useState } from "react";
import Ahkam_Prayer from "./Ahkam_Prayer";
import Ahkam_Feasting from "./Ahkam_Feasting";

import "./Ahkam.css";

function Ahkam() {
  const categories = {
    prayer: "أحكام الصلاة",
    feasting: "أحكام الصيام",
    hagg: "أحكام الحج",
  };

  const [activeCategory, setActiveCategory] = useState("prayer");

  const renderContent = () => {
    switch (activeCategory) {
      case "prayer":
        return <Ahkam_Prayer />;
      case "feasting":
        return <Ahkam_Feasting />;
      case "hagg":
      default:
        return <p>اختر قسماً من القائمة أعلاه.</p>;
    }
  };

  return (
    <>
      <div className="ahkam-menu">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            className={`ahkam-btn ${activeCategory === key ? "active" : ""}`}
            onClick={() => setActiveCategory(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="ahkam-content">{renderContent()}</div>
    </>
  );
}

export default Ahkam;

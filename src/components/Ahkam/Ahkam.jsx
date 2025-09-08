import { useState } from "react";
import Ahkam_Prayer from "./Ahkam_Prayer";
import Ahkam_Feasting from "./Ahkam_Feasting";
import Ahkam_HajjUmrah from "./Ahkam_HajjUmrah";

import "./Ahkam.css";

function Ahkam() {
  const categories = {
    prayer: "أحكام الصلاة",
    feasting: "أحكام الصيام",
    hagg: "أحكام الحج",
  };

  const [activeCategory, setActiveCategory] = useState("");

  const renderContent = () => {
    switch (activeCategory) {
      case "prayer":
        return <Ahkam_Prayer />;
      case "feasting":
        return <Ahkam_Feasting />;
      case "hagg":
        return <Ahkam_HajjUmrah />;
      default:
        return (
          <div className="default">
          ✨ من فضلك اختر قسماً من القائمة أعلاه لعرض الأحكام.
        </div>

        )
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
      <div className="ahkam-content" >{renderContent()}</div>
    </>
  );
}

export default Ahkam;

// Adhkar.jsx
import React, { useState } from "react";
import "./Adhkar.css";

// Import arrays (make sure you create them in separate files)
import { azkar_morning } from "../data/azkar";
import { azkar_night } from "../data/azkar";

function Adhkar() {
  const [selectedCategory, setSelectedCategory] = useState("morning");

  const categories = {
    morning: { label: "أذكار الصباح", data: azkar_morning },
    night: { label: "أذكار المساء", data: azkar_night },
  };

  // Keep counters state separately for each zekr
  const [counters, setCounters] = useState({});

  const handleDecrement = (index) => {
    setCounters((prev) => {
      const currentValue = prev[index] ?? currentAzkar[index].counter;
      if (currentValue > 0) {
        return { ...prev, [index]: currentValue - 1 };
      }
      return prev;
    });
  };

  const currentAzkar = categories[selectedCategory].data;

  return (
    <div className="adhkar-page">
      <h1 className="adhkar-title">الأذكار</h1>

      {/* Menu */}
      <div className="adhkar-menu">
        {Object.entries(categories).map(([key, { label }]) => (
          <button
            key={key}
            className={`menu-btn ${selectedCategory === key ? "active" : ""}`}
            onClick={() => setSelectedCategory(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Display Azkar */}
      <div className="adhkar-list">
        {currentAzkar.map((item, index) => {
          const currentCount = counters[index] ?? item.counter;
          return (
            <div key={index} className="adhkar-card">
              <p className="zekr-text">{item.zekr}</p>
              <div className="counter-box">
                <span className={`counter ${currentCount === 0 ? "done" : ""}`}>
                  🔁 {currentCount} مرة
                </span>
                <button
                  className="decrement-btn"
                  onClick={() => handleDecrement(index)}
                  disabled={currentCount === 0}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Adhkar;

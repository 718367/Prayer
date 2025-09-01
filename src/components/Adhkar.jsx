// Adhkar.jsx
import React, { useState } from "react";
import "./Adhkar.css";

import { azkar_morning } from "../data/azkar";
import { azkar_night } from "../data/azkar";

function Adhkar() {
  const [selectedCategory, setSelectedCategory] = useState("morning");

  const categories = {
    morning: { label: "أذكار الصباح", data: azkar_morning },
    night: { label: "أذكار المساء", data: azkar_night },
  };

  const [counters, setCounters] = useState({});

  const currentAzkar = categories[selectedCategory].data;

  const handleDecrement = (index) => {
    setCounters((prev) => {
      const categoryCounters = prev[selectedCategory] || {};
      const currentValue =
        categoryCounters[index] ?? currentAzkar[index].counter;

      if (currentValue > 0) {
        return {
          ...prev,
          [selectedCategory]: {
            ...categoryCounters,
            [index]: currentValue - 1,
          },
        };
      }

      return prev;
    });
  };

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
          const categoryCounters = counters[selectedCategory] || {};
          const currentCount = categoryCounters[index] ?? item.counter;

          return (
            <div key={index} className="adhkar-card">
              <div className="zekr-content">
                <p className="zekr-text">{item.zekr}</p>
              </div>

              <div className="counter-box">
                <button
                  className="decrement-btn"
                  onClick={() => handleDecrement(index)}
                  disabled={currentCount === 0}
                >
                  {currentCount}
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

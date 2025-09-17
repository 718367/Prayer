// Adhkar.jsx
import { useState } from "react";
import "./Adhkar.css";

import { azkar_morning } from "../../data/azkar";
import { azkar_night } from "../../data/azkar";
import { azkar_after_salah } from "../../data/azkar";
import { azkar_sleep } from "../../data/azkar";
import { azkar_waking_up } from "../../data/azkar";
import { rukia_sharia } from "../../data/azkar";
import { quran_khatm_duaa } from "../../data/azkar";
import { nabawi_dua } from "../../data/azkar";
import { prophets_duaa } from "../../data/azkar";
import { joame3_aldoaa } from "../../data/azkar";
function Adhkar() {
  const [selectedCategory, setSelectedCategory] = useState("morning");

  const categories = {
    morning: { label: "أذكار الصباح", data: azkar_morning },
    night: { label: "أذكار المساء", data: azkar_night },
    salah: { label: "أذكار ما بعد الصلاة", data: azkar_after_salah },
    azkar_sleep: { label: "أذكار النوم", data: azkar_sleep },
    waking_up: { label: "أذكار الاستيقاظ", data: azkar_waking_up },
    rukia: { label: "الرقية الشرعية", data: rukia_sharia },
    quran_duaa: { label: "دعاء ختم القرآن", data: quran_khatm_duaa },
    nabawi_duaa: {
      label: "أدعية النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ",
      data: nabawi_dua,
    },
    prophets_duaa: {
      label: "أدعية الأنبياء من القرآن الكريم",
      data: prophets_duaa,
    },
    joame3_aldoaa: { label: "جوامع الدعاء", data: joame3_aldoaa },
  };

  const [counters, setCounters] = useState({});

  const currentAzkar = categories[selectedCategory].data;

  const handleDecrement = (index) => {
    setCounters((prev) => {
      const categoryCounters = prev[selectedCategory] || {};

      const currentValue =
        categoryCounters[index] ?? currentAzkar[index].counter;

      if (currentValue > 0) {
        const newState = {
          ...prev,
          [selectedCategory]: {
            ...categoryCounters,
            [index]: currentValue - 1,
          },
        };

        return newState;
      } else {
        return prev;
      }
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

                {/* ✅ Show justification if exists */}
                {item.justification && (
                  <p className="zekr-justification">📖 {item.justification}</p>
                )}
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

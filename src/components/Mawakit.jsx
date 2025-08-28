import Prayer from "./Prayer";
import Clock from "./Clock";
import { cities } from "../data/cities";
import { formatTo12Hour } from "../Utils";
import { useState, useEffect } from "react";
import "./Mwakit.css";

function Mawakit() {
  const [city, setCity] = useState("Cairo");
  const [timings, setTimings] = useState({});
  const [loading, setLoading] = useState(true);
  const [nextPrayer, setNextPrayer] = useState("");
  const [remainingTime, setRemainingTime] = useState("");

  const dateObj = new Date();
  const date =
    String(dateObj.getDate()).padStart(2, "0") +
    "-" +
    String(dateObj.getMonth() + 1).padStart(2, "0") +
    "-" +
    dateObj.getFullYear();

  async function fetchData(selectedCity) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity/${date}?city=${selectedCity}&country=EG&method=5`
      );
      const data = await response.json();

      const formattedTimings = {};
      for (let key in data.data.timings) {
        formattedTimings[key] = data.data.timings[key]; // خليها 24h عشان الحساب
      }

      setTimings(formattedTimings);
      console.log(formattedTimings);
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    } finally {
      setLoading(false);
    }
  }

  // دالة لحساب الصلاة القادمة
  function getNextPrayer(timings) {
    if (!timings) return;

    const now = new Date();
    const prayersOrder = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

    for (let prayer of prayersOrder) {
      if (!timings[prayer]) continue;

      const [h, m] = timings[prayer].split(":").map(Number);
      const prayerTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        h,
        m
      );

      if (prayerTime > now) {
        return { name: prayer, time: prayerTime };
      }
    }

    // لو مفيش باقي اليوم → يبقى الصلاة القادمة فجر تاني يوم
    const [h, m] = timings["Fajr"].split(":").map(Number);
    const tomorrowFajr = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      h,
      m
    );
    return { name: "Fajr", time: tomorrowFajr };
  }

  // تحديث العد التنازلي كل ثانية
  useEffect(() => {
    if (Object.keys(timings).length === 0) return;

    const updateCountdown = () => {
      const next = getNextPrayer(timings);
      if (!next) return;

      setNextPrayer(next.name);

      const diff = next.time - new Date();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setRemainingTime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    updateCountdown(); // أول مرة
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [timings]);

  useEffect(() => {
    fetchData(city);
  }, [city]);

  // أسماء عربية للصلاة
  const prayerNames = {
    Fajr: "الفجر",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء",
  };

  return (
    <>
      <section>
        <div className="right">
          {/* ✅ عرض الصلاة القادمة والوقت المتبقي */}
          <div className="next-prayer-box">
            {nextPrayer && (
              <>
                <h3>🕌 الصلاة القادمة: {prayerNames[nextPrayer]}</h3>
                <p>⏳ الوقت المتبقي : {remainingTime}</p>
              </>
            )}
          </div>
          <div className="quot">
            <blockquote className="hadith-card">
              <p className="hadith-text">
                <span className="q-mark start">❝ </span>
                قال رسول الله ﷺ: «إنَّ أوَّلَ ما يُحاسَبُ به العبدُ يومَ
                القيامةِ الصلاةُ، فإنْ صلَحَتْ صلَحَ سائرُ عملِه، وإنْ فَسَدَتْ
                فَسَدَ سائرُ عملِه».
                <span className="q-mark end"> ❞</span>
              </p>
              <footer className="hadith-src">— رواه الإمام أحمد</footer>
            </blockquote>
          </div>
        </div>

        <div className="timing-container">
          <div className="top-head">
            <div className="city">
              <h3>المدينة</h3>
              <h4>
                <select
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                >
                  {cities.map((city_obj) => {
                    return (
                      <option key={city_obj.value} value={city_obj.value}>
                        {city_obj.name}
                      </option>
                    );
                  })}
                </select>
              </h4>
            </div>
            <div className="date">
              <h3>التاريخ</h3>
              <h4>{date}</h4>
            </div>
            <div className="clock">
              <h3>الساعة الآن</h3>
              <Clock />
            </div>
          </div>

          <div className="bottom-section">
            {loading ? (
              <div className="loader">جاري تحميل المواعيد...</div>
            ) : (
              <>
                <Prayer name="الفجر" time={formatTo12Hour(timings.Fajr)} />
                <Prayer name="الشروق" time={formatTo12Hour(timings.Sunrise)} />
                <Prayer name="الظهر" time={formatTo12Hour(timings.Dhuhr)} />
                <Prayer name="العصر" time={formatTo12Hour(timings.Asr)} />
                <Prayer name="المغرب" time={formatTo12Hour(timings.Maghrib)} />
                <Prayer name="العشاء" time={formatTo12Hour(timings.Isha)} />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Mawakit;

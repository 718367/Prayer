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

  useEffect(() => {
    fetchData(city);
  }, [city]);

  return (
    <>
      <section>
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

import Prayer from "./Prayer";
import Clock from "./Clock";
import { cities } from "../../data/cities";
import { formatTo12Hour } from "../../Utils";
import { useState, useEffect } from "react";
import "./Mwakit.css";

// Background images per prayer time
import FajrImg from "../../assets/Fajr.png";
import DhuhrImg from "../../assets/Dhuhr.png";
import AsrImg from "../../assets/Asr.png";
import MaghribImg from "../../assets/Maghrib.png";
import IshaImg from "../../assets/Isha.png";
import ShurooqImg from "../../assets/Shurooq .png";

function Mawakit() {
  const [city, setCity] = useState("Cairo");
  const [timings, setTimings] = useState({});
  const [loading, setLoading] = useState(true);
  const [nextPrayer, setNextPrayer] = useState("");
  const [remainingTime, setRemainingTime] = useState("");
  const [currentPrayer, setCurrentPrayer] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dateObj = new Date();
  const date =
    String(dateObj.getDate()).padStart(2, "0") +
    "-" +
    String(dateObj.getMonth() + 1).padStart(2, "0") +
    "-" +
    dateObj.getFullYear();

  async function fetchData(selectedCity) {
    setLoading(true);
    setErrorMsg("");

    const cacheKey = `timings_${selectedCity}_${date}`;

    // Helper: fetch with timeout
    const fetchWithTimeout = async (resource, options = {}) => {
      const { timeout = 8000 } = options;
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      try {
        const res = await fetch(resource, {
          ...options,
          signal: controller.signal,
        });
        clearTimeout(id);
        return res;
      } catch (e) {
        clearTimeout(id);
        throw e;
      }
    };

    // Retry logic
    const url = `https://api.aladhan.com/v1/timingsByCity/${date}?city=${selectedCity}&country=EG&method=5`;
    let lastErr;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const response = await fetchWithTimeout(url, { timeout: 8000 });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        const formattedTimings = {};
        for (let key in data.data.timings) {
          formattedTimings[key] = data.data.timings[key];
        }

        setTimings(formattedTimings);
        // cache
        try {
          localStorage.setItem(cacheKey, JSON.stringify(formattedTimings));
        } catch {}
        setLoading(false);
        return;
      } catch (err) {
        lastErr = err;
        await new Promise((r) => setTimeout(r, attempt * 800));
      }
    }

    // Fallback to cache
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        setTimings(parsed);
        setErrorMsg("تعذر الاتصال بالخادم. يتم عرض مواعيد مخزنة مؤقتاً.");
        setLoading(false);
        return;
      }
    } catch {}

    console.error("Error fetching prayer times:", lastErr);
    setErrorMsg(
      "تعذر جلب مواقيت الصلاة حالياً. تحقق من الاتصال ثم أعد المحاولة."
    );
    setLoading(false);
  }

  // دالة لحساب الصلاة القادمة
  function getNextPrayer(timings) {
    if (!timings) return;

    const now = new Date();

    const prayersOrder = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

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

  // دالة لتحديد الصلاة الحالية (التي دخل وقتها بالفعل)
  function getCurrentPrayer(timings) {
    if (!timings) return "";

    const now = new Date();
    const order = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

    let lastPrayer = "Fajr";
    for (let prayer of order) {
      if (!timings[prayer]) continue;
      const [h, m] = timings[prayer].split(":").map(Number);
      const t = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        h,
        m
      );
      if (t <= now) {
        lastPrayer = prayer;
      }
    }
    return lastPrayer;
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

      // حدد الصلاة الحالية لتغيير الخلفية
      const curr = getCurrentPrayer(timings);
      setCurrentPrayer(curr);
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
    Sunrise: "الشروق",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء",
  };

  // خلفيات لكل صلاة
  const prayerBackgrounds = {
    Fajr: FajrImg,
    Sunrise: ShurooqImg,
    Dhuhr: DhuhrImg,
    Asr: AsrImg,
    Maghrib: MaghribImg,
    Isha: IshaImg,
  };

  const currentBg = prayerBackgrounds[currentPrayer];

  return (
    <>
      <section
        style={
          currentBg
            ? { background: `url(${currentBg}) center/cover no-repeat` }
            : undefined
        }
      >
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
            {errorMsg && (
              <div className="loader" style={{ marginTop: "6px" }}>
                {errorMsg} <br />
                <button
                  className="menu-btn"
                  onClick={() => fetchData(city)}
                  style={{ marginTop: "8px" }}
                >
                  إعادة المحاولة
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Mawakit;

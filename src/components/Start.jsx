import "./Start.css";
import {  Link } from "react-router-dom";
function Start() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="brand">🌙 Mwakit</h1>
       
        <div className="hero-buttons">
        <Link className="btn btn-primary" to="/azkar">الأذكار</Link>
        <Link className="btn btn-secondary" to="/about">عن الموقع</Link>
        </div>
      </section>

      {/* Azkar Section */}
      <section className="section azkar fade-in">
        <h2>📖 ذكر اليوم</h2>
        <blockquote>
          "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له،
          له الملك وله الحمد وهو على كل شيء قدير."
        </blockquote>
        <Link className="btn btn-secondary" to="/azkar">المزيد من الأذكار</Link>
      </section>

      {/* Quran Verse */}
      <section className="section verse fade-in">
        <h2>🌿 آية اليوم</h2>
        <p className="verse-text">
          ﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾ <span>– الرعد: 28</span>
        </p>
      </section>
    </div>
  );
}

export default Start;

import "./Start.css";

function Start() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="brand">🌙 Mwakite</h1>
        <h2> مرحباً بك في موقع الأذكار والقرآن </h2>
        <p>
          موقع خاص لعرض مواقيت الصلاة، الأذكار اليومية، والآيات القرآنية
          مع دعم كامل للغة العربية.
        </p>
        <div className="hero-buttons">
          <a href="/azkar" className="btn btn-primary">الأذكار</a>
          <a href="/about" className="btn btn-secondary">عن الموقع</a>
        </div>
      </section>

      {/* Azkar Section */}
      <section className="section azkar fade-in">
        <h2>📖 ذكر اليوم</h2>
        <blockquote>
          "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له،
          له الملك وله الحمد وهو على كل شيء قدير."
        </blockquote>
        <a href="/azkar" className="btn btn-secondary">
          المزيد من الأذكار
        </a>
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


import "./Start.css";

function Start() {

  return (
     
    <div className="home">

      {/* Azkar Section */}
      <section className="section azkar">
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
      <section className="section verse">
        <h2>🌿 آية اليوم</h2>
        <p>﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾ – الرعد: 28</p>
      </section>

      
    </div>
  );
}

export default Start;

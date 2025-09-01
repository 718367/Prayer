import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>عن هذا الموقع</h1>
        <p>
          هذا الموقع تم إنشاؤه بكل ❤️ على يد{" "}
          <span className="highlight">يوسف محمد</span>، مهندس برمجيات Full Stack
          باستخدام <span className="react">ReactJS</span> و{" "}
          <span className="vite">Vite</span>.
        </p>
        <p>
          الهدف من هذا الموقع هو توفير{" "}
          <span className="highlight">مواقيت الصلاة</span> بدقة، مع عرض{" "}
          <span className="highlight">الأذكار اليومية</span> والأدعية المأثورة،
          وذلك بدعم كامل للغة العربية.
        </p>
        <h2>أقسام الموقع</h2>
        <ul className="about-list">
          <li>
            <strong>📅 الصفحة الرئيسية:</strong> تحتوي على لمحة سريعة عن الموقع
            وأبرز الخدمات المتوفرة.
          </li>
          <li>
            <strong>🕌 مواقيت الصلاة:</strong> صفحة مخصصة لعرض أوقات الصلاة حسب
            موقعك بدقة عالية.
          </li>
          <li>
            <strong>📖 الأذكار:</strong> تضم مجموعة من الأذكار اليومية التي
            تساعد على تذكر الله في مختلف الأوقات.
          </li>
          <li>
            <strong>🌿 آيات وأحاديث:</strong> تذكير يومي بآية أو حديث قصير يبعث.
          </li>
          <li>
            <strong>ℹ️ عن الموقع:</strong> هذه الصفحة (التي تقرأها الآن) توضح
            فكرة ورسالة الموقع.
          </li>
        </ul>
        <p className="waqf">(وقف لله تعالى)</p>
      </div>
    </div>
  );
}

export default About;

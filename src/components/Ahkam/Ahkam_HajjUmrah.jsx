import { useState } from "react";
import "./Ahkam.css";

function Ahkam_HajjUmrah() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="prayer-guide">
      <h2 className="section-title">🕋 أحكام الحج والعمرة</h2>
      <p className="section-intro">
        تنقسم أعمال الحج إلى <strong lassName="li-head">أركان</strong> يجب
        الإتيان بها جميعاً، ولا يصح الحج بترك شيء منها، وإلى{" "}
        <strong lassName="li-head">واجبات</strong> يصح الحج بترك شيء منها ويُجبر
        المتروك بدم، وإلى <strong lassName="li-head">سنن ومستحبات</strong> يكمل
        بها أجر الحاج وثوابه عند الله.
      </p>

      {/* أركان الحج */}
      <div className={`guide-block ${openSection === "arkan" ? "open" : ""}`}>
        <h3 className="block-title" onClick={() => toggleSection("arkan")}>
          📌 أركان الحج
          <span className="arrow">{openSection === "arkan" ? "▼" : "▶"}</span>
        </h3>
        {openSection === "arkan" && (
          <ol className="guide-list">
            <li>
              <strong className="li-head">الإحرام:</strong> نية الدخول في النسك،
              لقول النبي ﷺ: <em>إنما الأعمال بالنيات وإنما لكل امرئ ما نوى</em>.
              وله زمان (أشهر الحج) ومكان (المواقيت).
            </li>
            <li>
              <strong className="li-head">الوقوف بعرفة:</strong> لقول النبي ﷺ:{" "}
              <em>الحج عرفة</em>. ويبتدئ وقته من زوال شمس يوم التاسع إلى طلوع
              فجر يوم النحر.
              <span className="quran">(وقفت ههنا وعرفة كلها موقف) – مسلم</span>
            </li>
            <li>
              <strong className="li-head">طواف الإفاضة:</strong> لقوله تعالى:{" "}
              <span className="quran">
                {`{ثم ليقضوا تفثهم وليوفوا نذورهم وليطوفوا بالبيت العتيق}`}{" "}
                (الحج:29)
              </span>
              .
            </li>
            <li>
              <strong className="li-head">السعي بين الصفا والمروة:</strong> لقول
              النبي ﷺ: <em>اسعوا فإن الله كتب عليكم السعي</em>.
            </li>
          </ol>
        )}
      </div>

      {/* واجبات الحج */}
      <div className={`guide-block ${openSection === "wajibat" ? "open" : ""}`}>
        <h3 className="block-title" onClick={() => toggleSection("wajibat")}>
          ✅ واجبات الحج
          <span className="arrow">{openSection === "wajibat" ? "▼" : "▶"}</span>
        </h3>
        {openSection === "wajibat" && (
          <ol className="guide-list">
            <li>الإحرام من الميقات.</li>
            <li>الوقوف بعرفة إلى الغروب لمن وقف نهاراً.</li>
            <li>المبيت بمزدلفة ليلة النحر.</li>
            <li>المبيت بمنى ليالي التشريق.</li>
            <li>رمي الجمار: جمرة العقبة يوم العيد، والجمرات أيام التشريق.</li>
            <li>الحلق أو التقصير.</li>
            <li>طواف الوداع (إلا للحائض).</li>
          </ol>
        )}
      </div>

      {/* سنن الحج */}
      <div className={`guide-block ${openSection === "sunan" ? "open" : ""}`}>
        <h3 className="block-title" onClick={() => toggleSection("sunan")}>
          🌿 سنن الحج
          <span className="arrow">{openSection === "sunan" ? "▼" : "▶"}</span>
        </h3>
        {openSection === "sunan" && (
          <ul className="guide-list">
            <li>المبيت بمنى يوم التروية (اليوم الثامن).</li>
            <li>طواف القدوم للقارن والمفرد.</li>
            <li>الرمل والاضطباع في الطواف.</li>
            <li>الاغتسال للإحرام ولبس إزار ورداء أبيضين.</li>
            <li>التلبية من الإحرام إلى رمي جمرة العقبة.</li>
            <li>استلام الحجر الأسود وتقبيله.</li>
          </ul>
        )}
      </div>

      {/* أحكام العمرة */}
      <div className={`guide-block ${openSection === "umrah" ? "open" : ""}`}>
        <h3 className="block-title" onClick={() => toggleSection("umrah")}>
          🕋 أحكام العمرة
          <span className="arrow">{openSection === "umrah" ? "▼" : "▶"}</span>
        </h3>

        {openSection === "umrah" && (
          <div className="guide-content">
            {/* أركان العمرة */}
            <h4 className="sub-title">أركان العمرة</h4>
            <ul className="guide-list">
              <li>
                <strong className="li-head">الإحرام:</strong> وهو نية الدخول في
                النسك.
              </li>
              <li>
                <strong className="li-head">الطواف:</strong> حول البيت العتيق
                سبعة أشواط.
              </li>
              <li>
                <strong className="li-head">السعي:</strong> بين الصفا والمروة
                سبعة أشواط.
              </li>
            </ul>

            {/* واجبات العمرة */}
            <h4 className="sub-title">واجبات العمرة</h4>
            <ul className="guide-list">
              <li>
                <strong className="li-head">الإحرام من الميقات:</strong> فلا
                يجوز تجاوزه دون نية النسك.
              </li>
              <li>
                <strong className="li-head">الحلق أو التقصير:</strong> للتحلل من
                النسك.
              </li>
              <li>
                <strong className="li-head">طواف الوداع:</strong> عند من قال
                بوجوبه.
              </li>
            </ul>

            {/* سنن ومستحبات العمرة */}
            <h4 className="sub-title" >سنن العمرة</h4>
            <ul className="guide-list">
              <li>
                <strong className="li-head">الاغتسال للإحرام:</strong> والتطيب
                قبل عقد النية.
              </li>
              <li>
                <strong className="li-head">لبس إزار ورداء أبيضين:</strong>{" "}
                نظيفين للرجال.
              </li>
              <li>
                <strong className="li-head">الإكثار من التلبية:</strong> حتى بدء
                الطواف.
              </li>
              <li>
                <strong className="li-head">السلام على الحجر الأسود:</strong>{" "}
                وتقبيله إن تيسر.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ahkam_HajjUmrah;

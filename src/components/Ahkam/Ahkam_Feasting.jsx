import { useState } from "react";
import "./Ahkam.css";

function Ahkam_Feasting() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="prayer-guide">
      <h2 className="section-title">🕌 أحكام الصيام</h2>
      <p className="section-intro">
        الصيام فريضة عظيمة من فرائض الإسلام، شُرع على هذه الأمة كما شُرع على
        الأمم السابقة، وهو عبادة تزكي النفس وتربيها على التقوى والطاعة.
      </p>

      {/* تعريف الصوم */}
      <div
        className={`guide-block ${openSection === "definition" ? "open" : ""}`}
      >
        <h3 className="block-title" onClick={() => toggleSection("definition")}>
          📌 تعريف الصوم
          <span className="arrow">
            {openSection === "definition" ? "▼" : "▶"}
          </span>
        </h3>
        {openSection === "definition" && (
          <>
            <p>
              <strong>لغة:</strong> الإمساك مطلقاً، مثل قولهم: صام عن الكلام، أي
              أمسك عنه. ومنه قول الله على لسان مريم:
              <span className="quran">
                (إني نذرت للرحمن صوماً فلن أكلم اليوم إنسياً) (مريم:26).
              </span>
            </p>
            <p>
              <strong>شرعاً:</strong> الإمساك عن الطعام والشراب وسائر المفطرات
              من طلوع الفجر إلى غروب الشمس بنية مخصوصة.
            </p>
          </>
        )}
      </div>

      {/* فرضية الصيام */}
      <div
        className={`guide-block ${openSection === "obligation" ? "open" : ""}`}
      >
        <h3 className="block-title" onClick={() => toggleSection("obligation")}>
          ✅ فرضية الصيام
          <span className="arrow">
            {openSection === "obligation" ? "▼" : "▶"}
          </span>
        </h3>
        {openSection === "obligation" && (
          <>
            <p>
              فرضية رمضان ثابتة بالكتاب والسنة والإجماع. قال تعالى:
              <span className="quran">
                (يا أيها الذين آمنوا كتب عليكم الصيام كما كتب على الذين من
                قبلكم لعلكم تتقون) (البقرة:183).
              </span>
            </p>
            <p>
              وقال ﷺ: <em>بني الإسلام على خمس… وصوم رمضان</em>. وأجمعت الأمة على
              فرضيته، وهو واجب على كل مسلم بالغ عاقل قادر مقيم.
            </p>
          </>
        )}
      </div>

      {/* مراحل التشريع */}
      <div
        className={`guide-block ${openSection === "stages" ? "open" : ""}`}
      >
        <h3 className="block-title" onClick={() => toggleSection("stages")}>
          📌 مراحل تشريع الصيام
          <span className="arrow">
            {openSection === "stages" ? "▼" : "▶"}
          </span>
        </h3>
        {openSection === "stages" && (
          <ol className="guide-list">
            <li>
              <strong>المرحلة الأولى:</strong> صيام عاشوراء وجوباً، ثم نسخت
              فرضيته بعد رمضان.
            </li>
            <li>
              <strong>المرحلة الثانية:</strong> التخيير بين الصيام أو الفدية:
              <span className="quran">
                (وعلى الذين يطيقونه فدية طعام مسكين) (البقرة:184).
              </span>
            </li>
            <li>
              <strong>المرحلة الثالثة:</strong> منع الأكل بعد النوم ليلاً، ثم
              نُسخ الحكم بقوله تعالى:
              <span className="quran">
                (أحل لكم ليلة الصيام الرفث إلى نسائكم) (البقرة:187).
              </span>
            </li>
            <li>
              <strong>المرحلة الرابعة:</strong> استقرار الحكم على وجوب صوم رمضان
              على كل مكلف قادر.
            </li>
          </ol>
        )}
      </div>

      {/* مراتب الصيام */}
      <div
        className={`guide-block ${openSection === "levels" ? "open" : ""}`}
      >
        <h3 className="block-title" onClick={() => toggleSection("levels")}>
          🌿 مراتب الصيام
          <span className="arrow">
            {openSection === "levels" ? "▼" : "▶"}
          </span>
        </h3>
        {openSection === "levels" && (
          <ul className="guide-list">
            <li>🔹 <strong>الواجب:</strong> صوم رمضان وصوم النذر.</li>
            <li>❌ <strong>المحرم:</strong> صوم العيدين.</li>
            <li>
              🌿 <strong>المندوب:</strong> ستة شوال، يوم عاشوراء وتاسوعاء، ثلاثة
              أيام من كل شهر، وصوم داود.
            </li>
            <li>⚠️ <strong>المكروه:</strong> صوم الجمعة منفرداً.</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Ahkam_Feasting;

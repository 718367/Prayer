import { useState } from "react";
import "./Ahkam.css";
function Ahkam_Prayer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <>
      <div className="prayer-guide">
        <h2 className="section-title">🕌 صفة صلاة النبي ﷺ</h2>
        <p className="section-intro">
          وصف مختصر لما ورد في صفة الصلاة مع بيان
          <span className="highlight-rukn"> الأركان </span>و
          <span className="highlight-wajib"> الواجبات </span>و
          <span className="highlight-sunan"> السنن </span>و
          <span className="highlight-makruh"> المكروهات </span>.
          <br />
          <br />
          فهذه هي <span className="highlight-wajib">واجبات الصلاة</span>، والفرق
          بين
          <span className="highlight-rukn"> الركن </span> والواجب في الصلاة أن
          <span className="highlight-rukn"> الركن </span> إذا تركه المصلي سهواً
          أو نسياناً ثم ذكر، فيجب عليه أن يأتي به، ويسجد للسهو.
          <br />
          <br />
          وأما <span className="highlight-wajib">الواجب</span>، فلا يجب عليه
          الإتيان به إذا تجاوز محله، ويجبره سجود السهو.
          <br />
          <br />
          وأما <span className="highlight-sunan">سنن الصلاة</span> فهي ما عدا
          الأركان والواجبات المذكورة، وهي كثيرة يطول ذكرها وتفصيلها، فنذكر ما
          تيسر منها.
        </p>

        {/* الأركان */}
        <div className={`guide-block ${openSection === "arkan" ? "open" : ""}`}>
          <h3 className="block-title" onClick={() => toggleSection("arkan")}>
            📌 الأركان
            <span className="arrow" >{openSection === "arkan" ? "▼" : "▶"}</span>

          </h3>
          {openSection === "arkan" && (
            <ul className="guide-list">
              <li>النية</li>
              <li>تكبيرة الإحرام</li>
              <li>القيام في الفرض</li>
              <li>قراءة الفاتحة في كل ركعة</li>
              <li>الركوع</li>
              <li>القيام من الركوع</li>
              <li>السجود</li>
              <li>الجلوس بين السجدتين</li>
              <li>الطمأنينة في الجميع</li>
              <li>الجلوس للتشهد الأخير</li>
              <li>التشهد الأخير</li>
              <li>الصلاة على النبي ﷺ بعد التشهد الأخير</li>
              <li>التسليم</li>
              <li>الترتيب بين الجميع</li>
            </ul>
          )}
        </div>

        {/* الواجبات */}
        <div
          className={`guide-block ${openSection === "wajibat" ? "open" : ""}`}
        >
          <h3 className="block-title" onClick={() => toggleSection("wajibat")}>
            ✅ الواجبات
            <span className="arrow" >{openSection === "wajibat" ? "▼" : "▶"}</span>

          </h3>
          {openSection === "wajibat" && (
            <ul className="guide-list">
              <li>تكبيرات الانتقال</li>
              <li>التسميع: سمع الله لمن حمده</li>
              <li>التحميد: ربنا ولك الحمد</li>
              <li>التسبيح في الركوع: سبحان ربي العظيم</li>
              <li>التسبيح في السجود: سبحان ربي الأعلى</li>
              <li>قول: ربي اغفر لي بين السجدتين</li>
              <li>التشهد الأول والجلوس له</li>
            </ul>
          )}
        </div>

        {/* السنن */}
        <div className={`guide-block ${openSection === "sunan" ? "open" : ""}`}>
          <h3 className="block-title" onClick={() => toggleSection("sunan")}>
            🌿 السنن
            <span className="arrow" >{openSection === "sunan" ? "▼" : "▶"}</span>

          </h3>
          {openSection === "sunan" && (
            <ul className="guide-list">
              <li>رفع اليدين عند التكبيرات</li>
              <li>وضع اليد اليمنى على اليسرى</li>
              <li>دعاء الاستفتاح والاستعاذة</li>
              <li>قراءة سورة بعد الفاتحة</li>
              <li>التأمين بعد الفاتحة</li>
              <li>الزيادة في التسبيح في الركوع والسجود</li>
              <li>الاعتماد على الركبتين عند القيام</li>
            </ul>
          )}
        </div>

        {/* المكروهات */}
        <div
          className={`guide-block ${openSection === "makruhat" ? "open" : ""}`}
        >
          <h3   className="block-title" onClick={() => toggleSection("makruhat")} style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            ⚠️ المكروهات
            <span className="arrow" >{openSection === "makruhat" ? "▼" : "▶"}</span>

          </h3>
          {openSection === "makruhat" && (
            <ul className="guide-list">
              <li>السدل (إلقاء الثوب على الكتفين دون رد الطرف)</li>
              <li>اشتمال الصماء</li>
              <li>التلثم (تغطية الفم)</li>
              <li>كف الشعر أو الثوب</li>
              <li>التشبه بالكفار (كالتخصر)</li>
              <li>التشبه بالحيوان (إقعاء الكلب، انبساطه...)</li>
              <li>الحركة لغير حاجة</li>
              <li>إلصاق البطن بالفخذين في السجود</li>
              <li>الصلاة في مكان مُلهٍ</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Ahkam_Prayer;

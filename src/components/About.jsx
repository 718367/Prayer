import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">About Me & The Project</h1>

        <div className="about-content">
         
          <p>
            هذا المشروع يقدّم منصة <span className="highlight">مواقيت الصلاة والأذكار</span>،
            لعرض المواقيت الدقيقة بحسب المدينة، مع عدّ تنازلي للصلاة القادمة، 
            وأذكار يومية بواجهة بسيطة وسلسة تعمل على كل الأجهزة.
          </p>

          <div className="tech-section">
            <h2>التقنيات المستخدمة</h2>
            <ul>
              <li>⚛️ React.js — بناء الواجهات المكوّنة</li>
              <li>🧭 React Router — إدارة الصفحات (الرئيسية، المواقيت، الأذكار، تواصل معنا)</li>
              <li>🧩 Context API + Custom Hooks — مشاركة الحالة (المدينة، المواقيت) وإعادة استخدام المنطق</li>
              <li>🌐 Fetch / Aladhan API — جلب مواقيت الصلاة حسب المدينة</li>
              <li>🎨 CSS3 — تصميم متجاوب وداعم للـ RTL</li>
              <li>🕒 Utilities — تحويل الصيغ الزمنية والعدّ التنازلي للصلاة القادمة</li>
            </ul>
          </div>

          <div className="goals">
            <h2>أهداف المشروع</h2>
            <ul>
              <li>دقّة المواقيت وإمكانية اختيار المدينة بسهولة</li>
              <li>إظهار عدّ تنازلي واضح للصلاة القادمة</li>
              <li>عرض أذكار مختارة يوميًا مع تجربة استخدام سلسة</li>
              <li>دعم كامل للغة العربية </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

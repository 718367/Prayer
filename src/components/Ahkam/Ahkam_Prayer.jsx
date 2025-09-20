import React from "react";
import "./Ahkam_HajjUmrah.css"; // Assuming the same CSS file is used for styling
import mountain from "../../assets/arabsstock_P54240.jpg";
import madina from "../../assets/arabsstock_P44489.jpg";
import makka from "../../assets/sacred-islamic-religious-places-and-thumbnail-279258.jpg";
import house from "../../assets/house.jpg";

export default function Ahkam_Prayer() {
  return (
    <article className="ahkam-article">
      <h1 className="ahkam-main-title">أحكام الصلاة </h1>

      {/* مقدمة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">مقدمة عن الصلاة</h2>
        <div className="ahkam-image-wrapper">
          <img src={mountain} alt="المسجد" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>عمود الدين</h2>
            <p>
              « » قال رسول الله ﷺ: «رأس الأمر الإسلام، وعموده الصلاة، وذروة
              سنامه الجهاد في سبيل الله».
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          الصلاة هي الركن الثاني من أركان الإسلام وأعظمها بعد الشهادتين. وهي صلة
          بين العبد وربه، فرضها الله على المسلمين خمس مرات في اليوم والليلة، وهي
          أول ما يُحاسب عليه العبد يوم القيامة.
        </p>
      </div>

      <hr className="separator" />

      {/* شروط صحة الصلاة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">شروط صحة الصلاة</h2>
        <p className="ahkam-paragraph">
          شروط الصلاة هي ما يجب توفره قبل البدء فيها، ولا تصح الصلاة إلا بها.
          وهي:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ الإسلام والعقل والتمييز</h3>
          <p>فلا تجب على كافر أو مجنون أو طفل غير مميز.</p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الطهارة من الحدثين</h3>
          <p>
            <strong>الحدث الأصغر:</strong> يوجب الوضوء. <br />
            <strong>الحدث الأكبر:</strong> يوجب الغسل.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ طهارة البدن والثوب والمكان</h3>
          <p>إزالة النجاسة من الجسم والملابس والمكان الذي يُصلى فيه.</p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ ستر العورة</h3>
          <p>
            للرجل من السرة إلى الركبة، وللمرأة كامل جسدها عدا الوجه والكفين (في
            المذاهب: خلاف).
          </p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ استقبال القبلة</h3>
          <p>
            التوجه نحو الكعبة المشرفة، مع وجود استثناءات للعاجز أو في صلاة
            النافلة على الراحلة.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>6️⃣ دخول الوقت</h3>
          <p>لا تصح الصلاة قبل دخول وقتها المحدد شرعًا.</p>
        </div>
        <div className="ahkam-part">
          <h3>7️⃣ النية</h3>
          <p>محلها القلب، وهي قصد الصلاة وتعيينها (ظهر، عصر، ...).</p>
        </div>
      </div>

      <hr className="separator" />

      {/* أركان الصلاة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">أركان الصلاة</h2>
        <div className="ahkam-image-wrapper">
          <img src={madina} alt="أركان الصلاة" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>أركان الصلاة</h2>
            <p>قال النبي ﷺ:«"لا صلاة لمن لم يقرأ بفاتحة الكتاب"»[متفق عليه].</p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          لصلاة أركان أساسية لا تصح إلا بها، وهي:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ القيام مع القدرة في الفرض</h3>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ تكبيرة الإحرام</h3>
          <p>قول "الله أكبر" في بداية الصلاة.</p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ قراءة سورة الفاتحة</h3>
          <p>في كل ركعة (في المذاهب: خلاف للمأموم).</p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ الركوع</h3>
          <p>الانحناء مع الطمأنينة فيه.</p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ الرفع من الركوع والاعتدال قائمًا</h3>
        </div>
        <div className="ahkam-part">
          <h3>6️⃣ السجود على الأعضاء السبعة</h3>
          <p>الجبهة مع الأنف، الكفين، الركبتين، وأطراف القدمين.</p>
        </div>
        <div className="ahkam-part">
          <h3>7️⃣ الرفع من السجود والجلوس بين السجدتين</h3>
        </div>
        <div className="ahkam-part">
          <h3>8️⃣ الطمأنينة في جميع الأركان الفعلية</h3>
        </div>
        <div className="ahkam-part">
          <h3>9️⃣ التشهد الأخير والجلوس له</h3>
        </div>
        <div className="ahkam-part">
          <h3>🔟 الصلاة على النبي ﷺ في التشهد الأخير</h3>
        </div>
        <div className="ahkam-part">
          <h3>1️⃣1️⃣ التسليمتان</h3>
          <p>
            قول "السلام عليكم ورحمة الله" عن اليمين واليسار (في المذاهب: الثانية
            سنة).
          </p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣1️⃣ الترتيب بين الأركان</h3>
        </div>
      </div>

      <hr className="separator" />

      {/* واجبات الصلاة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">واجبات الصلاة</h2>
        <div className="ahkam-image-wrapper">
          <img src={makka} alt="سنن الصلاة" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>السنن</h2>
            <p>
              قال رسول الله ﷺ: «ما من عبدٍ مسلمٍ يُصلِّي لله تعالى كلَّ يومٍ
              ثنتي عشرةَ ركعةً تطوعًا غيرَ الفريضة، إلا بَنَى اللهُ له بيتًا في
              الجنة» — رواه مسلم.
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          الواجبات إذا تركها المصلي عمدًا بطلت صلاته، وإذا تركها سهوًا جبرها
          بسجود السهو. وهي:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ جميع التكبيرات عدا تكبيرة الإحرام</h3>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ قول "سمع الله لمن حمده"</h3>
          <p>للإمام والمنفرد.</p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ قول "ربنا ولك الحمد"</h3>
          <p>للجميع: الإمام والمأموم والمنفرد.</p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ قول "سبحان ربي العظيم" في الركوع</h3>
          <p>مرة واحدة على الأقل.</p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ قول "سبحان ربي الأعلى" في السجود</h3>
          <p>مرة واحدة على الأقل.</p>
        </div>
        <div className="ahkam-part">
          <h3>6️⃣ قول "رب اغفر لي" بين السجدتين</h3>
        </div>
        <div className="ahkam-part">
          <h3>7️⃣ التشهد الأول والجلوس له</h3>
        </div>
      </div>

      <hr className="separator" />

      {/* سنن الصلاة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">سنن الصلاة</h2>
        <div className="ahkam-image-wrapper">
          <img src={makka} alt="سنن الصلاة" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>السنن</h2>
            <p>
              قال رسول الله ﷺ: «ما من عبدٍ مسلمٍ يُصلِّي لله تعالى كلَّ يومٍ
              ثنتي عشرةَ ركعةً تطوعًا غيرَ الفريضة، إلا بَنَى اللهُ له بيتًا في
              الجنة» — رواه مسلم.
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          سنن الصلاة نوعان: <strong>سنن قولية</strong> و
          <strong>سنن فعلية</strong>. يُثاب فاعلها ولا يأثم تاركها.
        </p>
        <div className="ahkam-part">
          <h3>أبرز السنن القولية</h3>
          <p>
            دعاء الاستفتاح، الاستعاذة والبسملة، التأمين بعد الفاتحة، قراءة سورة
            بعد الفاتحة، الزيادة على تسبيحة في الركوع والسجود، الدعاء بعد التشهد
            الأخير.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>أبرز السنن الفعلية</h3>
          <p>
            رفع اليدين عند تكبيرة الإحرام والركوع والرفع منه، وضع اليد اليمنى
            على اليسرى على الصدر، النظر إلى موضع السجود، الافتراش في الجلوس بين
            السجدتين وفي التشهد الأول، التورك في التشهد الأخير.
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* مبطلات الصلاة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">مبطلات الصلاة</h2>
        <p className="ahkam-paragraph">
          وهي الأفعال التي إذا وقعت أثناء الصلاة أفسدتها ووجبت إعادتها.
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ الكلام العمد لغير مصلحة الصلاة</h3>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الأكل والشرب عمدًا</h3>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ الحركة الكثيرة المتوالية لغير ضرورة</h3>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ الضحك بصوت (القهقهة)</h3>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ ترك ركن أو شرط من شروطها عمدًا</h3>
        </div>
        <div className="ahkam-part">
          <h3>6️⃣ كشف العورة عمدًا</h3>
        </div>
        <div className="ahkam-part">
          <h3>7️⃣ انحراف كبير عن جهة القبلة</h3>
        </div>
        <div className="ahkam-part">
          <h3>8️⃣ انتقاض الطهارة (خروج ريح، إلخ)</h3>
        </div>
      </div>

      <hr className="separator" />

      {/* أحكام الطهارة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">أحكام الطهارة</h2>
        <div className="ahkam-image-wrapper">
          <img src={house} alt="أحكام الطهارة" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>مفتاح الصلاة</h2>
            <p>قال رسول الله ﷺ: «مفتاح الصلاة الطهور».</p>
          </div>
        </div>
        <p className="ahkam-paragraph">الطهارة شرط أساسي لصحة الصلاة، وتشمل:</p>
        <div className="ahkam-part">
          <h3>1️⃣ الوضوء</h3>
          <p>لرفع الحدث الأصغر، وله فرائض وسنن معروفة.</p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الغسل</h3>
          <p>لرفع الحدث الأكبر كالجنابة والحيض والنفاس.</p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ التيمم</h3>
          <p>
            بديل عن الوضوء والغسل عند فقدان الماء أو عدم القدرة على استعماله.
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* أحكام خاصة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">أحكام خاصة</h2>
        <div className="ahkam-image-wrapper">
          <img src={house} alt="صلاة الجماعة" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>يسر الإسلام</h2>
            <p>
              ﴿يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ﴾
            </p>
          </div>
        </div>
        <div className="ahkam-part">
          <h3>1️⃣ صلاة المسافر</h3>
          <p>
            يجوز له <strong>قصر</strong> الصلاة الرباعية إلى ركعتين، و
            <strong>الجمع</strong> بين الظهر والعصر، وبين المغرب والعشاء.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ صلاة المريض</h3>
          <p>
            يصلي قائمًا، فإن لم يستطع فقاعدًا، فإن لم يستطع فعلى جنب، فإن لم
            يستطع فمستلقيًا بالإيماء.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ الحائض والنفساء</h3>
          <p>يحرم عليهما الصلاة، ولا يجب عليهما قضاؤها بعد الطهر.</p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ صلاة الجماعة</h3>
          <p>
            واجبة على الرجال في المسجد (في المذاهب: سنة مؤكدة)، وتفضل صلاة الفرد
            بسبع وعشرين درجة.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ الإمام والمأموم</h3>
          <p>يجب على المأموم متابعة الإمام في جميع حركاته وعدم مسابقته.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* أوقات الصلوات وأحكام الجهر والسر */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">الأوقات والجهر والسر</h2>
        <div className="ahkam-part">
          <h3>أوقات الصلوات الخمس</h3>
          <p>
            1️⃣ <strong>الفجر:</strong> من طلوع الفجر الصادق إلى شروق الشمس.{" "}
            <br />
            2️⃣ <strong>الظهر:</strong> من زوال الشمس عن وسط السماء إلى أن يصير
            ظل كل شيء مثله. <br />
            3️⃣ <strong>العصر:</strong> من خروج وقت الظهر إلى غروب الشمس. <br />
            4️⃣ <strong>المغرب:</strong> من غروب الشمس إلى مغيب الشفق الأحمر.{" "}
            <br />
            5️⃣ <strong>العشاء:</strong> من مغيب الشفق الأحمر إلى نصف الليل.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>أحكام الجهر والسر</h3>
          <p>
            <strong>الصلوات الجهرية:</strong> الفجر، والمغرب، والعشاء (في
            الركعتين الأوليين)، وصلاة الجمعة والعيدين. <br />
            <strong>الصلوات السرية:</strong> الظهر والعصر، والركعة الثالثة من
            المغرب، والثالثة والرابعة من العشاء.
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* آداب ما بعد الصلاة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">آداب ما بعد الصلاة</h2>
        <p className="ahkam-paragraph">
          يُستحب للمصلي بعد السلام أن يأتي بالأذكار المشروعة، ومنها:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ الاستغفار ثلاثًا</h3>
          <p>"أستغفر الله، أستغفر الله، أستغفر الله".</p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ قول: "اللهم أنت السلام ومنك السلام..."</h3>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ قراءة آية الكرسي</h3>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ التسبيح والتحميد والتكبير</h3>
          <p>
            "سبحان الله" (33 مرة)، "الحمد لله" (33 مرة)، "الله أكبر" (33 مرة)،
            ثم يختم بـ "لا إله إلا الله وحده لا شريك له...".
          </p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ الدعاء</h3>
          <p>الدعاء بعد الصلاة من مواطن إجابة الدعاء.</p>
        </div>
      </div>
    </article>
  );
}

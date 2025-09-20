import React from "react";
import "./Ahkam_HajjUmrah.css";
import mountain from "../../assets/arabsstock_P54240.jpg";
import madina from "../../assets/arabsstock_P44489.jpg";
import makka from "../../assets/sacred-islamic-religious-places-and-thumbnail-279258.jpg";
import house from "../../assets/house.jpg";

export default function Ahkam_HajjUmrah() {
  return (
    <article className="ahkam-article">
      <h1 className="ahkam-main-title">أحكام الحج والعمرة</h1>

      {/* مقدمة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">مقدمة في الحج والعمرة</h2>
        <div className="ahkam-image-wrapper">
          <img src={makka} alt="الكعبة المشرفة" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>الركن الخامس</h2>
            <p>
              قال تعالى: ﴿وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ
              اسْتَطَاعَ إِلَيْهِ سَبِيلًا﴾.
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          الحج هو الركن الخامس من أركان الإسلام، وهو قصد بيت الله الحرام لأداء
          مناسك مخصوصة في زمن مخصوص. وهو واجب مرة واحدة في العمر على كل مسلم
          بالغ عاقل مستطيع. وتنقسم أعمال الحج إلى ثلاثة أقسام رئيسية:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ الأركان</h3>
          <p>
            هي التي لا يصح الحج إلا بها، ولا تُجبر بدم إذا تُركت، بل يجب الإتيان
            بها.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الواجبات</h3>
          <p>
            هي التي يصح الحج بتركها سهوًا، ولكن يجب على من تركها فدية (ذبح شاة).
          </p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ السنن</h3>
          <p>
            هي ما يُستحب فعله ويكتمل به أجر الحاج، ولكن لا شيء على من تركها.
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* شروط وجوب الحج */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">شروط وجوب الحج</h2>
        <p className="ahkam-paragraph">يجب الحج بتوفر الشروط الخمسة التالية:</p>
        <div className="ahkam-part">
          <h3>1️⃣ الإسلام</h3>
          <p>فلا يجب على غير المسلم ولا يصح منه.</p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ العقل</h3>
          <p>فلا يجب على المجنون.</p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ البلوغ</h3>
          <p>فلا يجب على الصغير، وإن حج صح حجه نفلًا.</p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ الحرية</h3>
          <p>فلا يجب على العبد المملوك.</p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ الاستطاعة</h3>
          <p>
            وتشمل الاستطاعة المالية (القدرة على تكاليف الحج) والبدنية (القدرة
            الجسدية على أداء المناسك).
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* أركان الحج */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">أركان الحج</h2>
        <div className="ahkam-image-wrapper">
          <img src={mountain} alt="جبل عرفات" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>الحج عرفة</h2>
            <p>قال رسول الله ﷺ: «الحج عرفة».</p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          للحج أركان أربعة عند جمهور العلماء، من ترك واحدًا منها بطل حجه:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ الإحرام</h3>
          <p>وهو نية الدخول في نسك الحج. لا ينعقد الحج بدونه.</p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الوقوف بعرفة</h3>
          <p>
            وهو الركن الأعظم للحج، ووقته من فجر يوم التاسع من ذي الحجة إلى فجر
            يوم النحر.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ طواف الإفاضة</h3>
          <p>
            طوافٌ بالبيت سبعة أشواط، ووقته بعد الوقوف بعرفة والمبيت بمزدلفة.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ السعي بين الصفا والمروة</h3>
          <p>
            وهو سبعة أشواط بين جبلي الصفا والمروة، تبدأ بالصفا وتنتهي بالمروة.
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* واجبات الحج */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">واجبات الحج</h2>
        <p className="ahkam-paragraph">
          واجبات الحج سبعة، من ترك واحدًا منها صح حجه ووجب عليه دم (فدية):
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ الإحرام من الميقات</h3>
          <p>وهو الإحرام من الأماكن المحددة شرعًا للقادمين إلى مكة.</p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الوقوف بعرفة إلى غروب الشمس</h3>
          <p>يجب على من وقف نهارًا أن يبقى في عرفة حتى تغرب الشمس.</p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ المبيت بمزدلفة</h3>
          <p>
            بعد النزول من عرفة ليلة النحر، يجب المبيت بمزدلفة حتى منتصف الليل
            على الأقل.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ المبيت بمنى ليالي التشريق</h3>
          <p>
            وهي ليلة الحادي عشر والثاني عشر (وللمتأخر: الثالث عشر) من ذي الحجة.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ رمي الجمار</h3>
          <p>رمي جمرة العقبة يوم النحر، ورمي الجمرات الثلاث في أيام التشريق.</p>
        </div>
        <div className="ahkam-part">
          <h3>6️⃣ الحلق أو التقصير</h3>
          <p>وهو التحلل من الإحرام بحلق شعر الرأس أو تقصيره.</p>
        </div>
        <div className="ahkam-part">
          <h3>7️⃣ طواف الوداع</h3>
          <p>
            وهو آخر ما يفعله الحاج قبل مغادرة مكة، ولا يجب على الحائض والنفساء.
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* سنن الحج */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">سنن الحج</h2>
        <div className="ahkam-image-wrapper">
          <img src={madina} alt="المسجد النبوي" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>التلبية</h2>
            <p>
              قال رسول الله ﷺ: «أتاني جبريل فأمرني أن آمر أصحابي أن يرفعوا
              أصواتهم بالتلبية» [رواه أحمد].
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          من السنن التي يُستحب للحاج فعلها ليتم أجره:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ طواف القدوم</h3>
          <p>وهو سنة للقارن والمفرد عند أول دخولهم مكة.</p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الاغتسال والتطيب للإحرام</h3>
          <p>يُسن الاغتسال والتطيب قبل عقد نية الإحرام ولبس ملابسه.</p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ التلبية ورفع الصوت بها</h3>
          <p>
            منذ الإحرام وحتى رمي جمرة العقبة يوم العيد، وصيغتها: "لبيك اللهم
            لبيك...".
          </p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ المبيت بمنى في اليوم الثامن</h3>
          <p>وهو يوم التروية، استعدادًا للذهاب إلى عرفة.</p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ الرَّمَل والاضطباع في الطواف</h3>
          <p>
            الرَّمَل هو الإسراع في المشي في الأشواط الثلاثة الأولى، والاضطباع هو
            كشف الكتف الأيمن. وهما في طواف القدوم أو العمرة.
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* محظورات الإحرام */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">محظورات الإحرام</h2>
        <p className="ahkam-paragraph">
          هي الأمور التي يُمنع منها المُحرم بسبب إحرامه، ومن فعل شيئًا منها
          متعمدًا وجبت عليه فدية.
        </p>
        <div className="ahkam-part">
          <h3>🚫 محظورات مشتركة للرجال والنساء</h3>
          <p>
            حلق الشعر، تقليم الأظافر، استعمال الطيب، قتل الصيد، عقد النكاح،
            الجماع ومقدماته.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>🚫 محظورات خاصة بالرجال</h3>
          <p>
            تغطية الرأس بملاصق (كالقبعة)، ولبس المخيط (الملابس المفصلة على الجسم
            كالثوب والسروال).
          </p>
        </div>
        <div className="ahkam-part">
          <h3>🚫 محظورات خاصة بالنساء</h3>
          <p>
            لبس النقاب أو القفازين، ولكن يجوز لها أن تغطي وجهها بغير النقاب عند
            وجود الرجال الأجانب.
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* أحكام العمرة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">أحكام العمرة</h2>
        <div className="ahkam-image-wrapper">
          <img src={house} alt="الكعبة" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>العمرة إلى العمرة</h2>
            <p>
              قال ﷺ: «العمرة إلى العمرة كفارة لما بينهما، والحج المبرور ليس له
              جزاء إلا الجنة».
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          العمرة هي زيارة بيت الله الحرام على وجه مخصوص، وحكمها سنة مؤكدة وقيل
          واجبة. وتصح في كل أوقات السنة.
        </p>
        <div className="ahkam-part">
          <h3>🕋 أركان العمرة</h3>
          <p>
            1️⃣ <strong>الإحرام:</strong> نية الدخول في النسك من الميقات. <br />
            2️⃣ <strong>الطواف:</strong> سبعة أشواط حول الكعبة. <br />
            3️⃣ <strong>السعي:</strong> سبعة أشواط بين الصفا والمروة.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>🕋 واجبات العمرة</h3>
          <p>
            1️⃣ <strong>الإحرام من الميقات:</strong> عدم تجاوز الميقات المحدد
            شرعًا بدون إحرام. <br />
            2️⃣ <strong>الحلق أو التقصير:</strong> وبه يتم التحلل من العمرة.
          </p>
        </div>
      </div>
    </article>
  );
}

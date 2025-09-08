import React from "react";
import "./Ahkam_HajjUmrah.css";
import mountain from "../../assets/arabsstock_P54240.jpg";
import madina from "../../assets/arabsstock_P44489.jpg";
import makka from "../../assets/sacred-islamic-religious-places-and-thumbnail-279258.jpg";
import house from "../../assets/house.jpg";
export default function Ahkam_HajjUmrah() {
  return (
    <article className="ahkam-article">
      <h1 className="ahkam-main-title">
        أركان الحج وواجباته وسننه وأحكام العمرة
      </h1>

      {/* مقدمة */}
      <div className="ahkam-section">
        <p className="ahkam-paragraph">
          <h2>أعمال الحج</h2>
          <p>تنقسم أعمال الحج إلى ثلاثة أقسام:</p>

          <div class="ahkam-part">
            <h3>1️⃣ الأركان</h3>
            <p>
              هي التي لا يصح الحج بدونها، مثل: <strong>الوقوف بعرفة</strong> و
              <strong>طواف الإفاضة</strong>.
            </p>
          </div>

          <div class="ahkam-part">
            <h3>2️⃣ الواجبات</h3>
            <p>
              إذا تركها الحاج صح حجه لكنه يُجبر بدم، مثل:{" "}
              <strong>المبيت بمزدلفة</strong> و<strong>رمي الجمار</strong>.
            </p>
          </div>

          <div class="ahkam-part">
            <h3>3️⃣ السنن والمستحبات</h3>
            <p>
              يكمل بها الحاج أجره وثوابه، مثل:{" "}
              <strong>الإكثار من التلبية</strong> و
              <strong>الاغتسال عند الإحرام</strong>.
            </p>
          </div>
        </p>
      </div>
      <hr className="separator" />
      {/* أركان الحج */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">أركان الحج</h2>
        <div className="ahkam-image-wrapper">
          <img src={mountain} alt="سنن الحج" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>جبل عرفات </h2>
            <p>
              قال رسول الله ﷺ: الحج عرفة، فمن أدرك عرفة بليل قبل أن يطلع الفجر؛
              فقد أدرك الحج.
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          <h2>أركان الحج</h2>
          <p>
            للحج أركان أربعة عند جمهور العلماء، لا يصح الحج بدونها ولا يُجبر
            تركها بدم:
          </p>

          <div class="ahkam-part">
            <h3>1️⃣ الإحرام</h3>
            <p>نية الدخول في النسك، وهو بداية الحج ولا ينعقد بدونه.</p>
          </div>

          <div class="ahkam-part">
            <h3>2️⃣ الوقوف بعرفة</h3>
            <p>الركن الأعظم، لقول النبي ﷺ: «الحج عرفة».</p>
          </div>

          <div class="ahkam-part">
            <h3>3️⃣ طواف الإفاضة</h3>
            <p>طواف واجب بعد العودة من منى، ولا يجزئ الحج بدونه.</p>
          </div>

          <div class="ahkam-part">
            <h3>4️⃣ السعي بين الصفا والمروة</h3>
            <p>سبعة أشواط بين الصفا والمروة، وهو ركن ثابت بنص القرآن.</p>
          </div>
        </p>
      </div>
      <hr className="separator" />
      {/* واجبات الحج */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">واجبات الحج</h2>
        <div className="ahkam-image-wrapper">
          <img src={madina} alt="واجبات الحج" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>واجبات الحج</h2>
            <p>
              قال رسول الله ﷺ: «من حج فلم يرفث ولم يفسق رجع كيوم ولدته أمه» متفق
              عليه
            </p>
          </div>
        </div>

        <p className="ahkam-paragraph">
          {" "}
          <h2>واجبات الحج</h2>
          <p>واجبات الحج سبعة، ومن ترك واحداً منها جبره بدم:</p>
          <div class="ahkam-part">
            <h3>1️⃣ الإحرام من الميقات</h3>
            <p>أن يحرم الحاج من الميقات المحدد له، وتركه يوجب دم.</p>
          </div>
          <div class="ahkam-part">
            <h3>2️⃣ الوقوف بعرفة إلى الغروب</h3>
            <p>الواجب أن يستمر الحاج في عرفة حتى غروب الشمس.</p>
          </div>
          <div class="ahkam-part">
            <h3>3️⃣ المبيت بمزدلفة</h3>
            <p>بعد الإفاضة من عرفة، يبيت الحاج بمزدلفة ولو جزءًا من الليل.</p>
          </div>
          <div class="ahkam-part">
            <h3>4️⃣ المبيت بمنى</h3>
            <p>المبيت بمنى ليالي التشريق واجب يجبر تركه بدم.</p>
          </div>
          <div class="ahkam-part">
            <h3>5️⃣ رمي الجمار</h3>
            <p>رمي جمرة العقبة والجمرات الثلاث في أيام التشريق.</p>
          </div>
          <div class="ahkam-part">
            <h3>6️⃣ الحلق أو التقصير</h3>
            <p>ينهي الحاج نسكه بالحلق أو التقصير.</p>
          </div>
          <div class="ahkam-part">
            <h3>7️⃣ طواف الوداع</h3>
            <p>آخر أعمال الحج عند مغادرة مكة، إلا للحائض.</p>
          </div>
        </p>
      </div>
      <hr className="separator" />
      {/* سنن الحج */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">سنن الحج</h2>
        <div className="ahkam-image-wrapper">
          <img src={makka} alt="سنن الحج" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>سنن الحج</h2>
            <p>
              قال الله تعالى: ﴿وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ﴾
              [البقرة: 196]
            </p>
          </div>
        </div>

        <p className="ahkam-paragraph">
          {" "}
          <h2>سنن الحج ومستحباته</h2>
          <p>من السنن التي يُكمل بها أجر الحاج:</p>
          <div class="ahkam-part">
            <h3>1️⃣ طواف القدوم</h3>
            <p>سنة لغير أهل مكة عند دخولهم المسجد الحرام أول مرة.</p>
          </div>
          <div class="ahkam-part">
            <h3>2️⃣ الاغتسال للإحرام</h3>
            <p>يستحب الاغتسال كما يغتسل للجنابة قبل عقد نية الإحرام.</p>
          </div>
          <div class="ahkam-part">
            <h3>3️⃣ لبس إزار ورداء أبيضين</h3>
            <p>يُستحب للرجل الإحرام في ثوبين أبيضين نظيفين.</p>
          </div>
          <div class="ahkam-part">
            <h3>4️⃣ التلبية</h3>
            <p>منذ الإحرام حتى رمي جمرة العقبة يوم النحر.</p>
          </div>
          <div class="ahkam-part">
            <h3>5️⃣ استلام الحجر الأسود وتقبيله</h3>
            <p>سنة مؤكدة أثناء الطواف، ومن لم يستطع أشار إليه.</p>
          </div>
          <div class="ahkam-part">
            <h3>6️⃣ الدعاء والأذكار</h3>
            <p>الإكثار من الدعاء في مواطن الإجابة كعرفة والطواف والسعي.</p>
          </div>
        </p>
      </div>
      <hr className="separator" />
      {/* أحكام العمرة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">أحكام العمرة</h2>
        <div className="ahkam-image-wrapper">
          <img src={house} alt="سنن الحج" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>احكام العمرة</h2>
            <p>
              قال رسول الله ﷺ: <br />
              <span>
                «الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا»
              </span>{" "}
              [متفق عليه]
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          {" "}
          <h2>أحكام العمرة</h2>
          <div class="ahkam-part">
            <h3>أركان العمرة</h3>

            <p>1️⃣ الإحرام</p>
            <p>2️⃣ الطواف بالبيت</p>
            <p>3️⃣ السعي بين الصفا والمروة</p>
          </div>
          <div class="ahkam-part">
            <h3>واجبات العمرة</h3>

            <p>1️⃣ الإحرام من الميقات</p>
            <p>2️⃣ الحلق أو التقصير</p>
            <p> 3️⃣ طواف الوداع (عند من قال بوجوبه)</p>
          </div>
          <p class="ahkam-note" style={{color:"rgba(117, 30, 30, 1)"}}>
            من ترك ركنًا لم تتم عمرته إلا به، ومن ترك واجبًا جبره بدم.
          </p>
        </p>
      </div>
    </article>
  );
}

import React from "react";
import "./Ahkam_HajjUmrah.css"; // Assuming the same CSS file is used for styling
import madina from "../../assets/arabsstock_P44489.jpg";
import makka from "../../assets/sacred-islamic-religious-places-and-thumbnail-279258.jpg";
import house from "../../assets/house.jpg";

export default function Ahkam_Siyam() {
  return (
    <article className="ahkam-article">
      <h1 className="ahkam-main-title">أحكام الصيام المفصلة</h1>

      {/* مقدمة */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">مقدمة في تعريف الصيام وفضله</h2>
        <div className="ahkam-image-wrapper">
          <img src={madina} alt="هلال رمضان" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>شهر رمضان</h2>
            <p>
              ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا
              كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ﴾
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          الصيام هو الركن الرابع من أركان الإسلام. وهو لغةً:{" "}
          <strong>الإمساك</strong>. وشرعًا:{" "}
          <strong>
            التعبد لله تعالى بالإمساك عن الأكل والشرب وسائر المفطرات من طلوع
            الفجر إلى غروب الشمس
          </strong>
          . وصيام شهر رمضان فرض على كل مسلم ومسلمة توفرت فيه الشروط.
        </p>
      </div>

      <hr className="separator" />

      {/* شروط وجوب الصيام */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">شروط وجوب الصيام وصحته</h2>
        <div className="ahkam-image-wrapper">
          <img src={madina} alt="هلال رمضان" className="ahkam-image" />
          <div className="ahkam-overlay">
            <p>
              قال رسول الله ﷺ: «قال الله عز وجل: كل عمل ابن آدم له إلا الصوم
              فإنه لي وأنا أجزي به، والصيام جُنَّة» – متفق عليه
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          يجب الصيام على من توفرت فيه الشروط التالية، وهي شروط للوجوب والصحة
          معًا:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ الإسلام</h3>
          <p>فلا يجب الصيام على غير المسلم ولا يصح منه.</p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ البلوغ</h3>
          <p>فلا يجب على الصغير، ولكن يؤمر به ليعتاده.</p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ العقل</h3>
          <p>فلا يجب على فاقد العقل كالمجنون.</p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ القدرة</h3>
          <p>وهي الاستطاعة الحسية والشرعية، فالعاجز لكبر أو مرض لا يلزمه.</p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ الإقامة</h3>
          <p>فلا يجب على المسافر، ويجب عليه القضاء.</p>
        </div>
        <div className="ahkam-part">
          <h3>6️⃣ الخلو من الموانع</h3>
          <p>وهو شرط خاص بالنساء، فيشترط النقاء من دم الحيض والنفاس.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* أركان الصيام */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">أركان الصيام</h2>
        <div className="ahkam-image-wrapper">
          <img src={madina} alt="هلال رمضان" className="ahkam-image" />
          <div className="ahkam-overlay">
            <p>
              قال رسول الله ﷺ: «إن في الجنة بابًا يقال له الريان، يدخل منه
              الصائمون يوم القيامة، لا يدخل منه أحد غيرهم، يقال: أين الصائمون؟
              فيقومون، لا يدخل منه أحد غيرهم، فإذا دخلوا أغلق فلم يدخل منه أحد»
              – متفق عليه
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">للصيام ركنان أساسيان لا يصح إلا بهما:</p>
        <div className="ahkam-part">
          <h3>1️⃣ النية</h3>
          <p>
            وهي قصد الصيام ومحلها القلب، ويجب تبييتها من الليل في صيام الفرض (أي
            قبل طلوع الفجر).
          </p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الإمساك عن المفطرات</h3>
          <p>وهو الامتناع عن كل ما يفطر من طلوع الفجر الصادق إلى غروب الشمس.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* سنن الصيام وآدابه */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">سنن الصيام وآدابه</h2>
        <div className="ahkam-image-wrapper">
          <img src={makka} alt="تمر للإفطار" className="ahkam-image" />
          <div className="ahkam-overlay">
            <h2>آداب الصائم</h2>
            <p>
              قال ﷺ: «إذا كان يوم صوم أحدكم فلا يرفث ولا يصخب، فإن سابَّه أحد أو
              قاتله فليقل: إني امرؤ صائم».
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          يستحب للصائم أن يتحلى بآداب وسنن تزيد من أجره، منها:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ السحور</h3>
          <p>
            تناول وجبة السحور وتأخيرها إلى ما قبل أذان الفجر، ففي السحور بركة.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ تعجيل الفطر</h3>
          <p>
            المبادرة بالإفطار عند تحقق غروب الشمس، ويسن أن يكون على رطب أو تمر
            أو ماء.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ الدعاء عند الإفطار</h3>
          <p>فإن للصائم عند فطره دعوة لا ترد.</p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ كثرة الطاعات</h3>
          <p>
            مثل قراءة القرآن والصدقة والذكر، والاجتهاد في العبادة خاصة في العشر
            الأواخر من رمضان.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ حفظ اللسان والجوارح</h3>
          <p>
            اجتناب اللغو والرفث والغيبة وكل قول أو فعل محرم ينقص من أجر الصيام.
          </p>
        </div>
      </div>

      <hr className="separator" />

      {/* مبطلات الصيام */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">مبطلات الصيام (المفطرات)</h2>
        <div className="ahkam-image-wrapper">
          <img src={madina} alt="هلال رمضان" className="ahkam-image" />
          <div className="ahkam-overlay">
            <p>
              عن أبي هريرة رضي الله عنه قال: قال رسول الله ﷺ: «من صام رمضان
              إيمانًا واحتسابًا غُفر له ما تقدم من ذنبه» – متفق عليه (البخاري
              ومسلم)
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          هي الأمور التي إذا فعلها الصائم بطل صومه ووجب عليه القضاء، وفي بعضها
          الكفارة. ويشترط أن يكون فاعلها:{" "}
          <strong>عالمًا، ذاكرًا، مختارًا</strong>.
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ الأكل والشرب عمدًا</h3>
          <p>أما من أكل أو شرب ناسيًا فصومه صحيح.</p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الجماع في نهار رمضان</h3>
          <p>وهو أعظم المفطرات، ويوجب القضاء مع الكفارة المغلظة.</p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ إنزال المني عمدًا</h3>
          <p>سواء بمباشرة أو استمناء، أما الاحتلام فلا يفطر.</p>
        </div>
        <div className="ahkam-part">
          <h3>4️⃣ ما كان بمعنى الأكل والشرب</h3>
          <p>مثل الإبر المغذية التي يستغني بها الجسم عن الطعام والشراب.</p>
        </div>
        <div className="ahkam-part">
          <h3>5️⃣ القيء عمدًا</h3>
          <p>أما من غلبه القيء وخرج بغير إرادته فصومه صحيح.</p>
        </div>
        <div className="ahkam-part">
          <h3>6️⃣ خروج دم الحيض والنفاس</h3>
          <p>متى رأت المرأة دم الحيض أو النفاس أفطرت، ولو قبل الغروب بلحظة.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* الأعذار المبيحة للفطر */}
      <div className="ahkam-section">
        <h2 className="ahkam-title">الأعذار المبيحة للفطر</h2>
        <div className="ahkam-image-wrapper">
          <img src={house} alt="قراءة القرآن" className="ahkam-image" />
          <div className="ahkam-overlay">
            <p>
              ﴿ فَمَنْ كَانَ مِنْكُمْ مَرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِنْ
              أَيَّامٍ أُخَرَ ۚ وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ
              مِسْكِينٍ ۖ فَمَنْ تَطَوَّعَ خَيْرًا فَهُوَ خَيْرٌ لَهُ ۚ وَأَنْ
              تَصُومُوا خَيْرٌ لَكُمْ إِنْ كُنْتُمْ تَعْلَمُونَ﴾
            </p>
          </div>
        </div>
        <p className="ahkam-paragraph">
          أباحت الشريعة الفطر في رمضان لأصحاب الأعذار التالية:
        </p>
        <div className="ahkam-part">
          <h3>1️⃣ المرض والسفر</h3>
          <p>
            يجوز للمريض الذي يشق عليه الصوم والمسافر أن يفطرا، وعليهما القضاء.
          </p>
        </div>
        <div className="ahkam-part">
          <h3>2️⃣ الحمل والرضاعة</h3>
          <p>
            إذا خافت المرأة الحامل أو المرضع على نفسها أو ولدها، أفطرت وعليها
            القضاء. (في المذاهب: خلاف في وجوب الفدية مع القضاء).
          </p>
        </div>
        <div className="ahkam-part">
          <h3>3️⃣ الشيخوخة والعجز الدائم</h3>
          <p>
            من كان كبيرًا في السن أو مريضًا مرضًا لا يرجى شفاؤه، يفطر ويطعم عن
            كل يوم مسكينًا (الفدية).
          </p>
        </div>
      </div>
    </article>
  );
}

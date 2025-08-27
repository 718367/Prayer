import { BrowserRouter, Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <BrowserRouter>
      <footer className="footer">
        <div className="footer-container">
          {/* القسم الأول - لوجو + وصف */}
          <div className="footer-logo">
            <h2>
            <span>🕌  </span>
          مواقيت الصلاة والأذكار</h2>
            <p>موقعك اليومي لمعرفة مواقيت الصلاة والأذكار المأثورة</p>
          </div>

          {/* روابط سريعة */}
          <div className="footer-links">
            <h3>روابط سريعة</h3>
            <ul>
              <li>
                <Link to="/">الرئيسية</Link>
              </li>
              <li>
                <Link to="/Mwakit">مواقيت الصلاة</Link>
              </li>
              <li>
                <Link to="/azkar">الأذكار</Link>
              </li>
              <li>
                <Link to="/contact">تواصل معنا</Link>
              </li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div className="footer-contact">
            <h3>تواصل معنا</h3>
            <p>📧 yousef718367@gmail.com</p>
            <p>📞 +20 100 000 0000</p>
          </div>
        </div>

        {/* الحقوق */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} جميع الحقوق محفوظة | مواقيت الصلاة
            والأذكار
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default Footer;

import { BrowserRouter, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <span>🕌</span>
            <h1>مواقيت الصلاة والأذكار</h1>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <ul>
              <li>
                <Link to="./Wellcome">الرئيسية</Link>
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
          </nav>
        </div>
      </header>
    </BrowserRouter>
  );
}
export default Header;

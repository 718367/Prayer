import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div
          className="logo"
          style={{
            width: "90px",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={Logo}
            alt="Mwakit logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* Navigation */}

        <nav className="nav" aria-label="التنقل الرئيسي">
          <ul>
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/mwakit">مواقيت الصلاة</Link>
            </li>
            <li>
              <Link to="/azkar">الأذكار</Link>
            </li>
            <li>
              <Link to="/ahkam">أحكام</Link>
            </li>
            <li>
              <Link to="/about">عنّا</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;

import {  Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    
      <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <span>🕌</span>
            <h1>Mwakit</h1>
          </div>

          {/* Navigation */}
          
          <nav className="nav">
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
                <Link to="/about">عنا</Link>
              </li>
            </ul>
          </nav>
          
          
        </div>
      </header>
    
  );
}
export default Header;

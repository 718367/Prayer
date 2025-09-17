import { BrowserRouter, Link } from "react-router-dom";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import "./Footer.css";
import Logo from "../../assets/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* القسم الأول - لوجو + وصف */}
        <div className="footer-logo">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {/* Logo */}
            <div
              className="logo"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={Logo}
                alt="Mwakit logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <h2>مواقيت الصلاة والأذكار</h2>
          </div>
          <p>موقعك اليومي لمعرفة مواقيت الصلاة والأذكار المأثورة</p>
        </div>

        {/* روابط سريعة */}
        <div
          className="footer-links"
          role="navigation"
          aria-label="روابط سريعة"
        >
          <h3>روابط سريعة</h3>
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
        </div>

        {/* تواصل معنا */}
        <div className="footer-contact">
          <h3>تواصل معنا</h3>
          <p>📧 yousef718367@gmail.com</p>
          <p style={{ direction: "ltr" }}>📞 +20 1010718367</p>
        </div>

        <div className="footer-social">
          <h3>تابعنا</h3>
          <div className="social-links">
            <Tooltip title="Facebook" arrow>
              <a
                href="https://www.facebook.com/profile.php?id=100008620243455 "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook fontSize="inherit" />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
              <a
                href="https://www.linkedin.com/in/yousef-mohamed-a02b19256/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn fontSize="inherit" />
              </a>
            </Tooltip>
            <Tooltip title="Instagram" arrow>
              <a
                href="https://www.instagram.com/yousef.mohamed.eissa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram fontSize="inherit" />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* الحقوق */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} جميع الحقوق محفوظة | Mwakit
          <span className="footer-sep">•</span>
          <a href="#" className="footer-legal-link">
            الشروط
          </a>
          <span className="footer-sep">/</span>
          <a href="#" className="footer-legal-link">
            الخصوصية
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

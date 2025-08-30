import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About This Website</h1>
        <p>
          This website was made with ❤️ by{" "}
          <span className="highlight">Yousef Mohamed</span>, a Full Stack
          Engineer using <span className="react">ReactJS</span> +{" "}
          <span className="vite">Vite</span>.
        </p>
        <p>
          A special website to display{" "}
          <span className="highlight">prayer times</span> and{" "}
          <span className="highlight">daily supplications</span> with full
          support for the Arabic language.
        </p>
        <p className="waqf">(وقف لله تعالى)</p>
      </div>
    </div>
  );
}

export default About;
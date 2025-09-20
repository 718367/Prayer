import { useState, useEffect } from "react";
import "./VisitorCounter.css";

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get or initialize visitor count
    const storedCount = localStorage.getItem("visitorCount");
    const currentCount = storedCount ? parseInt(storedCount) : 0;

    // Check if this is a new session
    const sessionKey = `session_${Date.now()}`;
    const hasVisitedToday = localStorage.getItem("visitedToday");
    const today = new Date().toDateString();

    if (!hasVisitedToday || hasVisitedToday !== today) {
      // New day, increment counter
      const newCount = currentCount + 1;
      setVisitorCount(newCount);
      localStorage.setItem("visitorCount", newCount.toString());
      localStorage.setItem("visitedToday", today);
    } else {
      setVisitorCount(currentCount);
    }

    // Show counter after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`visitor-counter ${isVisible ? "visible" : ""}`}>
      <div className="visitor-content">
        <div className="visitor-info">
          <span className="visitor-icon">👥</span>
          <span className="visitor-text">
            عدد الزوار: <strong>{visitorCount.toLocaleString()}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default VisitorCounter;

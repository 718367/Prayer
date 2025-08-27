import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function showTime() {
      let date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      let am_pm = "AM";

      if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
      } else if (hour === 0) {
        hour = 12;
        am_pm = "AM";
      }

      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      setTime(`${hour}:${min}:${sec}${am_pm}`);
    }

    showTime(); 
    const interval = setInterval(showTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div id="clock">{time}</div>;
}

export default Clock;

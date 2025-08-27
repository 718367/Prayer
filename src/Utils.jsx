export function formatTo12Hour(time) {
    if (!time) return "";
    let [hour, minute] = time.split(":").map(Number);
    let ampm = hour >= 12 ? "PM" : "AM";
  
    if (hour === 0) {
      hour = 12; // midnight -> 12 AM
    } else if (hour > 12) {
      hour = hour - 12;
    }
  
    return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
  }
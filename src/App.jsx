import { useState, useEffect } from "react";
import "./App.css";

const days = [
  "Sun",
  "Mon",
  "Tue",
  "Wen",
  "Thu",
  "Fry",
  "Sat"
]

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <>
      <div className="container">
        <ul className="days">
          { 
            days.map((day, i) => 
              <li 
                key={day} 
                className={
                  i === date.getDay() 
                    ? "active" 
                    : ""
                  }
              >
                {day}
              </li>
            )
          }
        </ul>
        <h1 className="time">
          { 
            date.toLocaleTimeString(
              [], 
              { 
                hour: "2-digit", 
                minute: "2-digit", 
                hour12: false
              }
            )
          }
        </h1>
      </div>
    </>
  )
}

export default App;

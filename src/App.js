import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  const changeTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(changeTime, 1000);
  return (
    <>
      <div className="container my-5">
        <h1 className="text-light">{time}</h1>
        <button class="btn btn-warning" onClick={changeTime}>
          Time
        </button>
      </div>
    </>
  );
}

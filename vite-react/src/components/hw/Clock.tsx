import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div>
      <h1>Current Time:</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default Clock;







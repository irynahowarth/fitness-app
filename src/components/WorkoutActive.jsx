import React from "react";

export default function WorkoutActive() {
  const [seconds, setSeconds] = React.useState("420");
  const [timerStatus, setTimerStatus] = React.useState(false);

  React.useEffect(() => {
    if (seconds <= 0 || !timerStatus) {
      return;
    }
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, timerStatus]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, `0`);
    const seconds = (timeInSeconds % 60).toString().padStart(2, `0`);
    return `${minutes}:${seconds}`;
  };
  return (
    <>
      <p>{formatTime(seconds)}</p>
      <button
        onClick={() => {
          setTimerStatus(!timerStatus);
        }}
      >
        {timerStatus ? "Pause" : "Resume"}
      </button>
    </>
  );
}

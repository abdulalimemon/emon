"use client";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date("May 31, 2024").getTime();

  useEffect(() => {
    const getTime = () => {
      const currentTime = new Date().getTime();
      const timeDifference = deadline - currentTime;

      if (timeDifference <= 0) {
        // Timer has expired, set all values to 0
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(interval); // Stop the interval once timer expires
      } else {
        // Calculate remaining days, hours, minutes, seconds
        const remainingSeconds = Math.floor(timeDifference / 1000);
        const remainingMinutes = Math.floor(remainingSeconds / 60);
        const remainingHours = Math.floor(remainingMinutes / 60);

        setDays(Math.floor(remainingHours / 24));
        setHours(remainingHours % 24);
        setMinutes(remainingMinutes % 60);
        setSeconds(remainingSeconds % 60);
      }
    };

    const interval = setInterval(getTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [deadline]);
  return (
    <>
      <div className="flex gap-3">
        <div className=" py-2 px-3 md:py-5 md:px-6 rounded-md flex items-center justify-center">
          <div>
            <h2 className="text-lg md:text-6xl font-bold text-center">
              {days < 10 ? "0" + days : days}
            </h2>
            <p className="text-base font-bold text-center">Days</p>
          </div>
        </div>

        <div className=" py-2 px-3 md:py-5 md:px-6 rounded-md flex items-center justify-center">
          <div>
            <h2 className="text-lg md:text-6xl font-bold text-center">
              {hours < 10 ? "0" + hours : hours}
            </h2>
            <p className="text-base font-bold text-center">Hours</p>
          </div>
        </div>

        <div className=" py-2 px-3 md:py-5 md:px-6 rounded-md flex items-center justify-center">
          <div>
            <h2 className="text-lg md:text-6xl font-bold text-center">
              {minutes < 10 ? "0" + minutes : minutes}
            </h2>
            <p className="text-base font-bold text-center">Mins</p>
          </div>
        </div>

        <div className=" py-2 px-3 md:py-5 md:px-6 rounded-md flex items-center justify-center">
          <div>
            <h2 className="text-lg md:text-6xl font-bold text-center">
              {seconds < 10 ? "0" + seconds : seconds}
            </h2>
            <p className="text-base font-bold text-center">Secs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;

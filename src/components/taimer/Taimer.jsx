import React, { useEffect, useState } from "react";

import styles from "./Taimer.module.scss";

const Taimer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* 🔥 FLASH SALES */}
      <div className={styles.flash}>
        <div className={styles.left}>
          <span className={styles.red}></span>
          <p>Today’s</p>
          <h1>Flash Sales</h1>
        </div>

        <div className={styles.timer}>
          <div>
            <p>Days</p>
            <h2>{String(time.days).padStart(2, "0")}</h2>
          </div>
          <span>:</span>
          <div>
            <p>Hours</p>
            <h2>{String(time.hours).padStart(2, "0")}</h2>
          </div>
          <span>:</span>
          <div>
            <p>Minutes</p>
            <h2>{String(time.minutes).padStart(2, "0")}</h2>
          </div>
          <span>:</span>
          <div>
            <p>Seconds</p>
            <h2>{String(time.seconds).padStart(2, "0")}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taimer;

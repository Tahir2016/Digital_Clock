"use client";
import React, { useEffect, useState } from "react";

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeString = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const dateString = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      setTime(timeString);
      setDate(dateString);
    };
    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="rounded-2xl border border-slate-700 bg-slate-800/70 px-10 py-8 shadow-2xl text-center">
        <h1 className="font-semibold mb-4 text-sm tracking-[0.25em] text-slate-400 uppercase">
          {" "}
          Digital Clock{" "}
        </h1>
        <p className="text-5xl md:text-6xl font-bold tabular-nums text-sky-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.8)] animate-pulse">
          {time || "--:--:--"}
        </p>
        <p className="mt-3 text-slate-300 text-sm md:text-base">
          {date || "Loading date..."}
        </p>
      </div>
    </div>
  );
};

export default DigitalClock;


import React from "react";
import { useState, useEffect } from "react";

export default function Countdown() {
  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);
  const [countingDown, setCountingDown] = useState(false);
  const [inputMins, setInputMinutes] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (countingDown) {
        if (secs > 0) {
          setSeconds(secs - 1);
        }
        if (secs === 0) {
          if (mins === 0) {
            clearInterval(sampleInterval);
          } else {
            setMinutes(mins - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  useEffect(() => {
    if (mins === 0 && secs === 0) {
      setText("抽獎！！！");
    }
  }, [mins, secs]);

  const start = () => {
    setCountingDown(true);
  };

  const handleChange = (e) => {
    setInputMinutes(e.target.value);
    setText("");
    setCountingDown(false);
  };

  const setting = () => {
    setMinutes(inputMins);
    setSeconds(0);
  };

  return (
    <div>
      {/* {!(mins && secs) ? (
        ""
      ) : ( */}
      <p>
        {text} {mins}:{secs < 10 ? `0${secs}` : secs}
      </p>
      {/* )} */}
      <input value={inputMins} onChange={handleChange}></input>
      <button onClick={setting}>Setting</button>
      <button onClick={start}>Strat</button>
    </div>
  );
}

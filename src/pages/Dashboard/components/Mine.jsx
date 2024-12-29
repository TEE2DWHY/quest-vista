import React, { useState, useEffect } from "react";
import { FaHammer } from "react-icons/fa";
import "../../../assets/styles/dashboard.css";

const Mine = () => {
  const [tokens, setTokens] = useState(0);
  const [level, setLevel] = useState(1);
  const [mining, setMining] = useState(false);

  // Logic to increase tokens and level up
  useEffect(() => {
    let interval;
    if (mining) {
      interval = setInterval(() => {
        setTokens((prevTokens) => {
          const nextTokens = prevTokens + 2 * level; // Tokens increase by 2 per 4 seconds, adjusted by level
          if (nextTokens >= 55000 && level === 1) setLevel(2);
          if (nextTokens >= 150000 && level === 2) setLevel(3);
          if (nextTokens >= 300000 && level === 3) setLevel(4);
          if (nextTokens >= 500000 && level === 4) setLevel(5);
          if (nextTokens >= 750000 && level === 5) setLevel(6);
          return nextTokens;
        });
      }, 4000); // Every 4 seconds
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [mining, level]);

  const handleStartMining = () => {
    setMining(true);
  };

  const handleStopMining = () => {
    setMining(false);
  };

  return (
    <div className="mineContainer">
      <div className="mineHeader">
        <h2>Mine Tokens</h2>
        <p>
          Mine tokens by clicking the hammer! Reach higher levels for better
          rewards!
        </p>
      </div>

      <div className="miningStatus">
        <p>Current Level: {level}</p>
        <p>Tokens: {tokens}</p>
      </div>

      <div className="miningArea">
        <button
          className={`mineButton level${level}`}
          onClick={mining ? handleStopMining : handleStartMining}
        >
          <FaHammer className={`hammerIcon level${level}`} />
          {mining ? "Stop Mining" : "Start Mining"}
        </button>
      </div>
    </div>
  );
};

export default Mine;

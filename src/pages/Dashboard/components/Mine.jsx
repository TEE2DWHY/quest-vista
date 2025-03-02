import React, { useState, useEffect } from "react";
import { FaHammer, FaStar, FaShieldAlt } from "react-icons/fa";
import "../../../assets/styles/dashboard.css";
import { cookie } from "../../../utils/storage";

const Mine = () => {
  const [tokens, setTokens] = useState(0);
  const [level, setLevel] = useState(1);
  const [mining, setMining] = useState(false);

  useEffect(() => {
    const savedTokens = cookie.getCookie("tokens");
    const savedMiningStatus = cookie.getCookie("miningStatus");
    const savedLevel = cookie.getCookie("level");

    if (savedTokens) {
      setTokens(Number(savedTokens));
    }

    if (savedMiningStatus === "true") {
      setMining(true);
    }

    if (savedLevel) {
      setLevel(Number(savedLevel));
    }
  }, []);

  useEffect(() => {
    let interval;
    if (mining) {
      interval = setInterval(() => {
        setTokens((prevTokens) => {
          const nextTokens = prevTokens + 2 * level;

          if (nextTokens >= 55000 && level === 1) setLevel(2);
          if (nextTokens >= 150000 && level === 2) setLevel(3);
          if (nextTokens >= 300000 && level === 3) setLevel(4);
          if (nextTokens >= 500000 && level === 4) setLevel(5);
          if (nextTokens >= 750000 && level === 5) setLevel(6);

          cookie.storeCookie("tokens", nextTokens, 1);
          cookie.storeCookie("level", level, 1);

          return nextTokens;
        });
      }, 4000);
    } else {
      clearInterval(interval);
      cookie.storeCookie("tokens", tokens, 1);
      cookie.storeCookie("level", level, 1);
    }

    return () => clearInterval(interval);
  }, [mining, level, tokens]);

  const handleStartMining = () => {
    setMining(true);
    cookie.storeCookie("miningStatus", "true", 1);
  };

  const handleStopMining = () => {
    setMining(false);
    cookie.storeCookie("miningStatus", "false", 1);
  };

  return (
    <div className="mineContainer">
      <div className="mineHeader">
        <h2>Mine Quest Tokens</h2>
        <p className="miningSubHeader">
          Mine tokens by clicking the hammer! Reach higher levels for better
          rewards!
        </p>
      </div>

      <div className="miningStatus">
        <p>Current Level: {level}</p>
        <p>Quest Tokens: {tokens}</p>
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

      <div className="card-container">
        <div
          className="info-card"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <h3>Level Up</h3>
          <p>Reach higher levels to earn more tokens faster!</p>
          <div className="card-icon">
            <FaStar className="star-icon" />
          </div>
        </div>

        <div
          className="info-card"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <h3>Protection</h3>
          <p>Level up to gain shields and protect your rewards!</p>
          <div className="card-icon">
            <FaShieldAlt className="shield-icon" />
          </div>
        </div>
      </div>

      <div className="bonusInfo">
        <p>
          <strong>Bonus:</strong> Level up your mining speed with special
          upgrades!
        </p>
      </div>
    </div>
  );
};

export default Mine;

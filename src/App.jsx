import { useState } from "react";
import "./App.css";
// import frameOne from "./assets/images/frame1.png";
import welcome from "./assets/images/welcome.png";
import { FaEthereum } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiBirdFill } from "react-icons/pi";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <span className="note">Qu</span>est Vi
          <span className="note">st</span>a
        </header>
        <div className="subHeader">
          <span>
            <PiBirdFill />
            Nick Jay
          </span>
          <span className="span2">
            <div className="iconContainer">
              <FaEthereum color="#fff" />
            </div>
            Ethereum
          </span>
        </div>
        <div className="welcomeContainer">
          <div className="imageContainer">
            <img src={welcome} alt="" className="welcome-img" />
          </div>
          <p>
            Welcome to <strong>Quest Vista</strong>! Start mining and earn Quest
            Tokens while exploring the world of crypto rewards.
          </p>
          <button className="getStarted">
            Start Mining <FaArrowRightLong color="#1b1b1b" size={22} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

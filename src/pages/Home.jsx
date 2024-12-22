import "../assets/styles/home.css";
// import frameOne from "./assets/images/frame1.png";
import welcome from "../assets/images/welcome.png";
import { FaEthereum } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiBirdFill } from "react-icons/pi";

function Home() {
  return (
    <>
      <div className="app-container">
        <header className="header-title">
          <span className="header-highlight">Qu</span>est Vi
          <span className="header-highlight">st</span>a
        </header>

        <div className="subheader-container">
          <span className="subheader-user">
            <PiBirdFill />
            Nick Jay
          </span>
          <span className="subheader-balance">
            <div className="balance-icon-container">
              <FaEthereum color="#fff" />
            </div>
            Ethereum
          </span>
        </div>

        <div className="welcome-section">
          <div className="image-wrapper">
            <img src={welcome} alt="Welcome" className="welcome-image" />
          </div>
          <p className="welcome-text">
            Welcome to <strong>Quest Vista</strong>! Start mining and earn Quest
            Tokens while exploring the world of crypto rewards.
          </p>
          <a href="/dashboard">
            <button className="start-button">
              Start Mining <FaArrowRightLong color="#1b1b1b" size={22} />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;

import "../assets/styles/home.css";
import welcome from "../assets/images/welcome.png";
import { FaEthereum } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiBirdFill } from "react-icons/pi";
import { useAccountDetails } from "../hooks/useAccountDetails";
import sonic from "../assets/images/sonic.avif";

function Home() {
  const { userName } = useAccountDetails();

  return (
    <>
      <div className="app-container">
        <header className="header-title">
          <span className="header-highlight">Qu</span>est Vi
          <span className="header-highlight">st</span>a
        </header>

        <div className="subheader-container">
          <span className="subheader-user">
            <PiBirdFill />@{userName}
          </span>
          <span className="subheader-balance">
            <div className="balance-icon-container">
              <img src={sonic} alt="sonic-img" className="sonic" />
            </div>
            Sonic
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
              Start Mining <FaArrowRightLong color="#ffff" size={22} />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;

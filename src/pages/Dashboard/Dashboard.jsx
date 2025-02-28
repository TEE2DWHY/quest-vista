import "../../assets/styles/dashboard.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiBirdLight } from "react-icons/pi";
import { FaBitcoin } from "react-icons/fa6";
import frameTwo from "../../assets/images/frame2.webp";
import Footer from "./components/Footer";
import { useAccount } from "../../hooks/useAccount";
import Tasks from "./components/Tasks"; // Import the Tasks component
import { useState } from "react";
import Mine from "./components/Mine";
import Friends from "./components/Friends";
import Assets from "./components/Assets";

const Dashboard = () => {
  const { userName } = useAccount();

  // State to track active tab
  const [activeTab, setActiveTab] = useState("Home");

  // Render content based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case "Task":
        return <Tasks />;
      case "Friends":
        return <Friends />;
      case "Assets":
        return <Assets />;
      case "Home":
      default:
        return (
          <div className="dashboard">
            {/* Header */}
            <div className="dashboard-header">
              <span className="title">@{userName}</span>
              <button className="inviteBtn">Invite friends</button>
            </div>

            {/* My Stake Card */}
            <div className="stake-card" data-aos="fade-in">
              <p className="card-title">My stake</p>
              <h2 className="amount">$0</h2>
              <p className="currency">0 SUI</p>
              <div className="roi-container">
                <p className="roi">
                  NET ROI <span className="roi-positive">+1%</span> ❓
                </p>
                <button className="action-button">Deposit</button>
              </div>
            </div>

            {/* Earnings Available Card */}
            <div className="earnings-card" data-aos="fade-up">
              <p className="card-title">Earnings Available</p>
              <h2 className="amount">$0</h2>
              <p className="currency">0 SUI</p>
              <div className="progress-bar"></div>
              <div className="timeline-container">
                <p className="timeline">Staking timeline ❓</p>
                <button className="action-button">Withdraw</button>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="nav-bar">
              <button className="nav-button active">Stats</button>
              <button className="nav-button">Community</button>
              <button className="nav-button">Activity</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard">
      <div className="container">{renderContent()}</div>
      {/* Pass setActiveTab to Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Dashboard;

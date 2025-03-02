import "../../assets/styles/dashboard.css";
import Footer from "./components/Footer";
import { useAccountDetails } from "../../hooks/useAccountDetails";
import Tasks from "./components/Tasks";
import { useState } from "react";
import Mine from "./components/Mine";
import Friends from "./components/Friends";
import Assets from "./components/Assets";
import { GiCycle } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useAccount } from "wagmi";
import { isUserConnected } from "../../utils/web3CustomFunctions";
import { message } from "antd";

const Dashboard = () => {
  const { userName } = useAccountDetails();
  const { isConnected } = useAccount();
  const [messageApi, contextHolder] = message.useMessage();

  const handleDeposit = () => {
    if (!isUserConnected(isConnected)) {
      return messageApi.error(
        <div className="message">Please Connect Wallet</div>
      );
    }
  };

  const withdrawFunds = () => {
    if (!isUserConnected(isConnected)) {
      return messageApi.error(
        <div className="message">Please Connect Wallet</div>
      );
    }
  };

  // State to track active tab
  const [activeTab, setActiveTab] = useState("Home");

  // Render content based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case "Task":
        return <Tasks />;
      case "Friends":
        return <Friends />;
      case "Mine":
        return <Mine />;
      case "Assets":
        return <Assets />;
      case "Home":
      default:
        return (
          <>
            {contextHolder}
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
                <p className="currency">0 QT</p>
                <div className="roi-container">
                  <p className="roi">
                    NET ROI <FaArrowTrendUp />
                  </p>
                  <button className="action-button" onClick={handleDeposit}>
                    Deposit
                  </button>
                </div>
              </div>

              {/* Earnings Available Card */}
              <div className="earnings-card" data-aos="fade-up">
                <p className="card-title">Earnings Available</p>
                <h2 className="amount">$0</h2>
                <p className="currency">0 QT</p>
                <div className="progress-bar"></div>
                <div className="timeline-container">
                  <p className="timeline">
                    Staking timeline <GiCycle />
                  </p>
                  <button className="action-button" onClick={withdrawFunds}>
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="nav-bar">
                <button className="nav-button active">Stats</button>
                <button className="nav-button">Community</button>
                <button className="nav-button">Activity</button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="dashboard">
      <div>{renderContent()}</div>
      {/* Pass setActiveTab to Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Dashboard;

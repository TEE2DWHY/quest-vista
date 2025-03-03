import React, { useState, useMemo, useEffect } from "react";
import { message } from "antd";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useAccountDetails } from "../../hooks/useAccountDetails";
import DepositModal from "./components/DepositModal";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import Mine from "./components/Mine";
import Friends from "./components/Friends";
import Assets from "./components/Assets";
import { GiCycle } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { isUserConnected } from "../../utils/web3CustomFunctions";
import { CiLink } from "react-icons/ci";

const Dashboard = () => {
  const { userName } = useAccountDetails();
  const [messageApi, contextHolder] = message.useMessage();
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { address: connectedAddress, isConnected } = useAccount();
  const walletConnect = useMemo(() => {
    return connectors.find((connector) => connector.name === "WalletConnect");
  }, [connectors]);
  const [activeTab, setActiveTab] = useState("Home");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      connect({ connector: walletConnect });
    }
  }, [isConnected]);

  const handleDeposit = () => {
    if (!isUserConnected(isConnected)) {
      return messageApi.error(
        <div className="message">Please Connect Wallet</div>
      );
    }
    setIsModalVisible(true);
  };

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
              <div className="dashboard-header">
                <span className="title">@{userName}</span>
                <button className="inviteBtn">Invite friends</button>
              </div>

              <div className="stake-card" data-aos="fade-in">
                <div className="stake-card-header">
                  <p className="card-title">My stake</p>
                  <span className="stake-note">
                    Deposit Eth to join our pre-sale.
                  </span>
                </div>
                <div className="stake-amount">
                  <h2 className="amount">$0</h2>
                  <span className="minimum-deposit">
                    Minimum Deposit: 0.12ETH
                  </span>
                </div>
                <p className="currency">0 ETH</p>
                <div className="roi-container">
                  <p className="roi">
                    NET ROI <FaArrowTrendUp color="#22c55e" />
                  </p>
                  <button className="action-button" onClick={handleDeposit}>
                    Deposit
                  </button>
                </div>
              </div>

              <div className="earnings-card" data-aos="fade-up">
                <p className="card-title">Earnings Available</p>
                <h2 className="amount">$0</h2>
                <p className="currency">0 QT</p>
                <div className="progress-bar"></div>
                <div className="timeline-container">
                  <p className="timeline">
                    Staking timeline <GiCycle color="#fff" />
                  </p>
                  <button className="action-button">Withdraw</button>
                </div>
              </div>
              <div className="connect-wallet">
                <button
                  onClick={() => {
                    !isConnected
                      ? connect({ connector: walletConnect })
                      : disconnect();
                  }}
                  className="connect-wallet-button"
                >
                  {isConnected ? (
                    <div className="connected-address">
                      <CiLink size={28} />{" "}
                      {`${connectedAddress.slice(
                        0,
                        4
                      )}...${connectedAddress.slice(38)}`}
                    </div>
                  ) : (
                    "Connect Wallet"
                  )}
                </button>
              </div>
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
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />

      <DepositModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onDeposit={() => {}}
      />
    </div>
  );
};

export default Dashboard;

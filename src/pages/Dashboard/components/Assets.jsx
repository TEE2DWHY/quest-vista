import React, { useEffect, useMemo } from "react";
import "../../../assets/styles/dashboard.css";
import { useConnect, useAccount, useDisconnect } from "wagmi";
import { message } from "antd";
import { isUserConnected } from "../../../utils/web3CustomFunctions";

const Assets = () => {
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();
  const [messageApi, contextHolder] = message.useMessage();

  const { address: connectedAddress, isConnected } = useAccount();
  const walletConnect = useMemo(() => {
    return connectors.find((connector) => connector.name === "WalletConnect");
  }, [connectors]);

  useEffect(() => {
    if (!isConnected) {
      connect({ connector: walletConnect });
    }
  }, [isConnected]);

  useEffect(() => {
    if (error) {
      console.error("Error connecting: ", error);
    }
  }, [error]);

  const stakeAssets = () => {
    if (!isUserConnected(isConnected)) {
      return messageApi.error(
        <div className="message">Please Connect Wallet</div>
      );
    }
  };

  const withdrawAssets = () => {
    if (!isUserConnected(isConnected)) {
      return messageApi.error(
        <div className="message">Please Connect Wallet</div>
      );
    }
  };
  return (
    <>
      {contextHolder}
      <div className="assets-container">
        <div className="header">
          <div className="coins">
            {[...Array(8)].map((_, index) => (
              <span key={index} className="coin">
                🪙
              </span>
            ))}
          </div>
          <h1 className="balance">0</h1>
          <h2 className="currency">Quest Tokens</h2>
          <p className="history">History &gt;</p>
        </div>

        <div className="card-container">
          <div className="card" data-aos="fade-in" aos-duration="3000">
            <div className="card-content">
              <div className="card-text">
                <h3>Stake & earn more Quest Tokens</h3>
                <p className="apy">365% APY</p>
              </div>
              <button className="action-btn" onClick={stakeAssets}>
                Stake
              </button>
            </div>
          </div>

          <div className="card" data-aos="fade-in" aos-duration="3600">
            <div className="card-content">
              <div className="card-text">
                <h3>Claim On-Chain</h3>
                <p>Connect via WalletConnect</p>
              </div>
              <button
                className="action-btn"
                onClick={() => {
                  !isConnected
                    ? connect({ connector: walletConnect })
                    : disconnect();
                }}
              >
                {isConnected
                  ? `${connectedAddress.slice(0, 3)}...${connectedAddress.slice(
                      39
                    )}`
                  : "Connect"}
              </button>
            </div>
          </div>

          <div className="card" data-aos="fade-in" aos-duration="4000">
            <div className="card-content">
              <div className="card-text">
                <h3>Withdraw Tokens</h3>
                <p>Withdraw Quest Tokens</p>
              </div>
              <button className="action-btn" onClick={withdrawAssets}>
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;

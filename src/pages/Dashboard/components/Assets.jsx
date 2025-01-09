import React from "react";
import "../../../assets/styles/dashboard.css";

const Assets = () => {
  return (
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
        {/* Stake & Earn */}
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <h3>Stake & earn more Quest Tokens</h3>
              <p className="apy">365% APY</p>
            </div>
            <button className="action-btn">Stake</button>
          </div>
        </div>

        {/* Claim On-Chain */}
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <h3>Claim On-Chain</h3>
              <p>Bitget Wallet Lite</p>
            </div>
            <button className="action-btn">Connect</button>
          </div>
        </div>

        {/* Transfer Tokens */}
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <h3>Transfer Tokens</h3>
              <p>Send Quest Tokens to other users</p>
            </div>
            <button className="action-btn">Transfer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;

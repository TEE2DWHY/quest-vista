import React, { useState } from "react";
import "../../../assets/styles/dashboard.css";
import {
  FaStar,
  FaGift,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCatchClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="taskContainer">
      {/* Header Section */}
      <div className="taskHeader">
        <FaStar className="starIcon" />
        <h1>Tasks</h1>
        <p>Complete tasks to earn Quest Tokens</p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab active">General Tasks</button>
        <button className="tab" onClick={() => setShowModal(true)}>
          Refferal Tasks <span className="badge">1</span>
        </button>
      </div>

      {/* General Tasks */}
      <div className="generalTasks">
        <p className="sectionTitle">
          <span className="bullet">•</span> General Tasks
        </p>
        <ul className="taskList">
          <li className="taskItem">
            <FaTiktok className="taskIcon tiktok" /> Follow our TikTok page
          </li>
          <li className="taskItem">
            <FaYoutube className="taskIcon youtube" /> Subscribe to our YouTube
            channel
          </li>
          <li className="taskItem">
            <FaTwitter className="taskIcon twitter" /> Follow our Twitter
            account
          </li>
          <li className="taskItem">
            <FaInstagram className="taskIcon instagram" /> Follow our Instagram
            page
          </li>
        </ul>
      </div>

      {/* Special Task */}
      <div className="specialGift">
        <p className="sectionTitle">
          <span className="bullet">•</span> Special Task
        </p>
        <p className="timer">Your last chance for a quick level up.</p>
        <div className="giftCard">
          <FaGift className="giftIcon" />
          <div className="cardContent">
            <h3>Catch the falling stars!</h3>
            <p>
              Catch 40× daily by using <strong>0.05 APT</strong> 🪙
            </p>
            <p className="note">Payment verification will take ~5 mins.</p>
          </div>
          <button className="catchButton">Catch</button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>Refer a Friend Today!</h2>
            <p>Invite your friends to join and earn rewards together!</p>
            <button className="referButton">Refer Now</button>
            <button className="closeButton" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;

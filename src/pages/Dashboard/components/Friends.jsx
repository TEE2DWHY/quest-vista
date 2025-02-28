import React from "react";
import { FaGift, FaTelegramPlane, FaHeart } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import "../../../assets/styles/dashboard.css";

function Friends() {
  return (
    <div className="inviteContainer">
      <FaHeart className="loveIcon" size={28} color="pink" />
      <h1>Invite friends!</h1>
      <p>You and your friend will receive bonuses</p>
      <div className="invite-options">
        <div className="option" data-aos="fade-in">
          <FaGift className="inviteIcon" />
          <h2>Invite a friend</h2>
          <p>
            <span className="bonus">+150</span> for you and your friend
          </p>
        </div>
        <div className="option" data-aos="fade-in">
          <FaTelegramPlane className="inviteIcon" />
          <h2>Invite a friend with Telegram Premium</h2>
          <p>
            <span className="bonus">+250</span> for you and your friend
          </p>
        </div>
        <div className="referral">
          <p>
            You are already a referral, invited by{" "}
            <span className="referral-source">
              Quest Vista | Community manager
            </span>
          </p>
        </div>
      </div>
      <div className="friends-list">
        <h2>List of your friends</h2>
        <div className="empty-list">
          <p>You haven't invited anyone yet</p>
        </div>
      </div>
      <div className="invite-button">
        <button>Invite a friend</button>
        <button className="share-button">
          <BsShare className="share-icon" />
        </button>
      </div>
    </div>
  );
}

export default Friends;

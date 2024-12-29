import "../../../assets/styles/footer.css";
import {
  FaHome,
  FaTasks,
  FaUserFriends,
  FaRegUserCircle,
} from "react-icons/fa";
import { GiOpenTreasureChest } from "react-icons/gi";
import { IoHammer } from "react-icons/io5";

// Footer Component
const Footer = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { label: "Home", icon: <FaHome />, className: "home-icon" },
    { label: "Task", icon: <FaTasks />, className: "task-icon" },
    { label: "Mine", icon: <IoHammer />, className: "mine-icon" },
    { label: "Friends", icon: <FaUserFriends />, className: "friends-icon" },
    {
      label: "Assets",
      icon: <GiOpenTreasureChest />,
      className: "assets-icon",
    },
  ];

  return (
    <div className="footer">
      <div className="footer-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${activeTab === item.label ? "active" : ""}`}
            onClick={() => setActiveTab(item.label)}
          >
            <div className={`icon ${item.className}`}>{item.icon}</div>
            <span className="menu-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

import "../../../assets/styles/footer.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { SlMagicWand } from "react-icons/sl";
import { FaTasks } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
        <div className="menu-item">
          <div className="icon task-icon">
            <FaTasks />
            <span className="badge">5</span>
          </div>
          <span className="menu-label">Task</span>
        </div>
        <div className="menu-item">
          <div className="icon top-icon">
            <SlMagicWand />
          </div>
          <span className="menu-label">Top</span>
        </div>
        <div className="menu-item">
          <div className="icon hed-hog-icon">
            <CiStar color="#1b1b1b" />
          </div>
          <span className="menu-label active">Conquest</span>
        </div>
        <div className="menu-item">
          <div className="icon game-icon">
            <FaGamepad />
          </div>
          <span className="menu-label">Game</span>
        </div>
        <div className="menu-item">
          <div className="icon friends-icon">
            <FaRegUserCircle color="#1b1b1b" />
          </div>
          <span className="menu-label">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

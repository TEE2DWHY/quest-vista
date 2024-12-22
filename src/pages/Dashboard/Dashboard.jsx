import "../../assets/styles/dashboard.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiBirdLight } from "react-icons/pi";
import { FaBitcoin } from "react-icons/fa6";
import frameTwo from "../../assets/images/frame2.webp";
import Footer from "./components/Footer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="header">
          <div className="profile">
            <div className="left">
              <div className="userName">
                <span className="imageContainer">
                  <div className="iconContainer">
                    <PiBirdLight fontSize={30} color="#fff" />
                  </div>
                  Hey
                </span>
                <span className="userHandle">@NickJay</span>
              </div>
            </div>
            <div className="right">
              Your Profile <MdOutlineKeyboardArrowRight size={20} />
            </div>
          </div>
          <div className="score-section">
            <div className="score">
              <span className="score-value">
                <FaBitcoin />
                875,009
              </span>
              <span className="score-label">Score</span>
            </div>
            <div className="ranking">
              <span className="ranking-value"># 11.7 M</span>
            </div>
          </div>
        </div>
      </div>
      <p className="note">
        your daily tasks would be updated on the task tab below. <br /> do
        today's task and increase your reward!
      </p>
      <div className="imageContainer">
        <img src={frameTwo} alt="" className="heroImage" />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
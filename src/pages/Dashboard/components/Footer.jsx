import "../../../assets/styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
        <div className="menu-item">
          <div className="icon task-icon">
            <span className="badge">5</span>
          </div>
          <span className="menu-label">Task</span>
        </div>
        <div className="menu-item">
          <div className="icon top-icon"></div>
          <span className="menu-label">Top</span>
        </div>
        <div className="menu-item">
          <div className="icon hed-hog-icon"></div>
          <span className="menu-label active">Conquest</span>
        </div>
        <div className="menu-item">
          <div className="icon game-icon"></div>
          <span className="menu-label">Game</span>
        </div>
        <div className="menu-item">
          <div className="icon friends-icon"></div>
          <span className="menu-label">Friends</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

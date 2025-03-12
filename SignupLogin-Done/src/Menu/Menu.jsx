import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import playButton from "../Components/Assets/Play Button.png";
import settingsButton from "../Components/Assets/Settings Button.png";
import quitButton from "../Components/Assets/Quit Button.png";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="game-title">CODIGO</h1>
      
      <div className="menu-buttons">
        {/* Play Button */}
        <Link to="/play" className="menu-button">
          <img src={playButton} alt="Play Button" />
        </Link>

        {/* Settings Button */}
        <Link to="/settings" className="menu-button">
          <img src={settingsButton} alt="Settings Button" />
        </Link>

        {/* Quit Button */}
        <Link to="/quit" className="menu-button">
          <img src={quitButton} alt="Quit Button" />
        </Link>
      </div>

      <div className="menu-top-right">
        <Link to="/profile" className="menu-link">Profile & Cards</Link>
        <Link to="/leaderboard" className="menu-link">Leaderboard</Link>
        <Link to="/login" className="menu-link">Log in</Link>
      </div>
    </div>
  );
};

export default Menu;

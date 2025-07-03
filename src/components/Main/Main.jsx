import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p className="nav-title">Gemini</p>
      </div>

      <div className="main-container">
        <div className="greet">
          <p className="greet-hello">
            Hello, <span>Dev.</span>
          </p>
          <p className="greet-sub">How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="Message Icon" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src="src/assets/gallery_icon.png"  />
              <img src="src/assets/mic_icon.png"  />
              <img src="src/assets/send_icon.png"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p className="nav-title">Gemini</p>
        <img className="user-icon" src={assets.gemini_icon} alt="gemini Icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span> Hello, Ved.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <img src={assets.compass_icon} alt="" />
            <p>Suggest beautiful places to see on an upcoming road trip</p>
          </div>
          <div className="card">
            <img src={assets.bulb_icon} alt="" />
            <p>Suggest beautiful places to see on an upcoming road trip</p>
          </div>
          <div className="card">
            <img src={assets.message_icon} alt="" />
            <p>Suggest beautiful places to see on an upcoming road trip</p>
          </div>
          <div className="card">
            <img src={assets.code_icon} alt="" />
            <p>Suggest beautiful places to see on an upcoming road trip</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

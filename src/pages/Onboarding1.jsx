import React from "react";
import { Link } from "react-router-dom";

const Onboarding1 = () => {
  return (
    <div className="onboarding__screen row">
      <div className="onboarding__container">
        <h1 className="onboarding__container--h1">Let's Do Habits Better</h1>
        <div className="onboarding__bottom">
          <Link to="/main/dashboard" className="onboard__button">
            Get Started
          </Link>
          <Link to="/main/dashboard" className="onboard__button2">
            I already have an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding1;

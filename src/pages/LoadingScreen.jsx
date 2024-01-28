import React from "react";
import Spinner from "../assets/spinner-solid.svg";

const LoadingScreen = () => {
  return (
    <div className="loading__screen row">
      <div className="loading__row">
        <h1 className="loading__row--h1">LifeStreak</h1>
        <div className="loading__row--spinner-wrap">
          <figure className="loading__row--spinner">
            <img className="loading__row--spinner-img" src={Spinner} alt="" />
          </figure>
          <h3 className="loading__row--spinner-h3">Loading...</h3>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

import React from "react";
import NikeLogo from "../assets/Nike.jpeg";
import Whoop from "../assets/Whoop.jpeg";
import Pelton from "../assets/Pelton.jpeg";
import Equinox from "../assets/Equinox.jpeg";

const Marketplace = () => {
  return (
    <div className="marketplace__row row">
      <div className="marketplace__top">
        <div className="marketplace__saved">$5,753 SAVED</div>
        <div className="marketplace__saved2">Here's how much you saved</div>
        <div className="marketplace__categories">Categories</div>
      </div>
      <div className="categories__row">
        <div className="category__box">Fitness</div>
        <div className="category__box">Sleep</div>
        <div className="category__box">Mental Health</div>
      </div>
      <div className="brand__boxes">
        <figure className="boxie">
          <img className="marketplace__img" src={NikeLogo} alt="" />
          <div className="boxie__bttm">
            <h2 className="boxie__title">Nike</h2>
            <div className="boxie__discount">15% OFF</div>
          </div>
        </figure>
        <figure className="boxie">
          <img className="marketplace__img" src={Whoop} alt="" />
          <div className="boxie__bttm">
            <h2 className="boxie__title">Nike</h2>
            <div className="boxie__discount">15% OFF</div>
          </div>
        </figure>
        <figure className="boxie">
          <img className="marketplace__img" src={Pelton} alt="" />
          <div className="boxie__bttm">
            <h2 className="boxie__title">Nike</h2>
            <div className="boxie__discount">15% OFF</div>
          </div>
        </figure>
        <figure className="boxie">
          <img className="marketplace__img" src={Equinox} alt="" />
          <div className="boxie__bttm">
            <h2 className="boxie__title">Nike</h2>
            <div className="boxie__discount">15% OFF</div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Marketplace;
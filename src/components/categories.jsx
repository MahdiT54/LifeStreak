import React from "react";
import Apple from "../assets/appleimage.png";
import Shoe from "../assets/shoe.png";
import Sleep from "../assets/sleep.png";
import Therapy from "../assets/Therapy.png"

const Categories = () => {
  return (
    <div className="categories__section">
      <div className="categories__top">
        <div className="categories__text">CATEGORIES</div>
        {/* <a href="/"> */}
        <div className="see-more">see more {">"}</div>
        {/* </a> */}
      </div>
      <div className="categories__circles">
        <div className="category">
          <div className="category__inner">
            <img className="category__img" src={Apple} alt="" />
          </div>
          <div className="category__value">$4,800</div>
        </div>
        <div className="category">
          <div className="category__inner">
            <img className="category__img" src={Shoe} alt="" />
          </div>
          <div className="category__value">$2,700</div>
        </div>
        <div className="category">
          <div className="category__inner">
            <img className="category__img" src={Therapy} alt="" />
          </div>
          <div className="category__value">$250</div>
        </div>
        <div className="category">
          <div className="category__inner">
            <img className="category__img" src={Sleep} alt="" />
          </div>
          <div className="category__value">$150</div>
        </div>
        <div className="category">
          <div className="category__inner">
            <img className="category__img" src={Apple} alt="" />
          </div>
          <div className="category__value">$100</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

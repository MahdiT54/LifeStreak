import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="row nav__row">
          <figure className="nav__logo">
            {/* <img src={logo} alt="LOGO" className="nav__logo--img" /> */}
            Scaling
          </figure>
          <div className="nav__list">
            <div className="nav__list--element">Product</div>
            <div className="nav__list--element">Pricing</div>
            <div className="nav__list--element">Blog</div>
            <div className="nav__list--element">Resources</div>
            <div className="nav__list--element">About</div>
          </div>
          <div className="nav__right">
            <a className="nav__right--login" href="/">
              Log in
            </a>
            <a className="nav__right--try" href="/">
              Try Scaling
            </a>
            <a className="nav__right--demo" href="/">
              See Demo
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

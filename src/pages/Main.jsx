import UserImage from "../assets/userimage.webp";
import { Link, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Dashboard from "./Dashboard";
import Friends from "./Marketplace";
import Marketplace from "./Marketplace";

const Main = () => {
  return (
    <div className="dashboard__row row">
      <div className="dashboard__container">
        <div className="dashboard__top">
          <h1 className="dashboard__top--h1">LifeStreak</h1>
          <Link to="/" className="user__image">
            <figure>
              <img className="user__image--inner" src={UserImage} alt="" />
            </figure>
          </Link>
        </div>
        <div className="dashboard__nav">
          <Link to="/main/feed" className="Feed">
            Feed
          </Link>
          <Link to="/main/dashboard" className="Dashboard">
            Dashboard
          </Link>
          <Link to="/main/marketplace" className="Friends">
            Marketplace
          </Link>
        </div>
        <Routes>
          <Route path="feed" element={<Feed />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="marketplace" element={<Marketplace />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;

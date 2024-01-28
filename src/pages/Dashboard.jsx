import React from "react";
import Graph from "../components/graph";
import Categories from "../components/categories";
import Streaks from "../components/streaks";

const Dashboard = () => {
  return (
    <div className="graphing__section">
      <div className="graph__section">
        <div className="saved">$21,650</div>
        <div className="saved__text">Here’s how much you saved</div>
        <Graph />
        <Categories />
        <Streaks />
      </div>
    </div>
  );
};

export default Dashboard;

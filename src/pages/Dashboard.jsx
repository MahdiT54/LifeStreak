import React from "react";
import Graph from "../components/graph";
import Categories from "../components/categories";
import Streaks from "../components/streaks";

const Dashboard = () => {
  return (
    <div className="graphing__section">
      <div className="graph__section">
        <Graph />
      </div>
    </div>
  );
};

export default Dashboard;

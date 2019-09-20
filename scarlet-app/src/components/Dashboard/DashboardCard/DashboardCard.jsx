import React from "react";
import "./DashboardCard.css";

const DashboardCard = props => {
  const { title, number, link } = props;
  return (
    <div className="dashboard-card">
      {number && <h4 className="dashboard-card-number">{number}</h4>}

      <h3>{title}</h3>
    </div>
  );
};

export default DashboardCard;

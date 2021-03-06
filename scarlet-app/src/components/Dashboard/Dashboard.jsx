import React, { useEffect } from "react";
import "./Dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../actions";

import InvalidatedAccount from "../Generic/InvalidatedAccount";
import DashboardCard from "./DashboardCard/DashboardCard";
import userAvatar from "../../img/assets/dashboard/user-avatar.png";

const Dashboard = () => {
  const user = useSelector(state => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUser(user.id));
  }, [dispatch, user]);
  const isValidated = useSelector(state => state.users);
  console.log("isValidated: ", isValidated);

  return (
    <div>
      {user.isVerified && (
        <div className="l-dashboard">
          <div className="dashboard-header">
            <div className="dashboard-avatar">
              <img src={userAvatar} alt="" />
            </div>
          </div>

          <div className="dashboards-all-cards">
            <DashboardCard title="Voir mes voitures" number="2" link="#" />
            <DashboardCard
              title="Consulter mes locations"
              number="5"
              link="#"
            />
            <DashboardCard title="Modifier mon profil" link="#" />
            <DashboardCard title="Mon Rang" link="#" />
          </div>
        </div>
      )}
      {!user.isVerified && <InvalidatedAccount />}
    </div>
  );
};

export default Dashboard;

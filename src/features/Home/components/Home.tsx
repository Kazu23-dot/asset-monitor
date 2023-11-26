import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PaidIcon from "@mui/icons-material/Paid";
import "../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="HomeMenu">
        <div className="HomeMenu-Sub">
          <ul>
            <li>
              <div className="HomeMenuItem1">
                <NavLink to="/AssetMonitor/DashBoard">
                  <div className="HomeMenuIcon1" id="icon">
                    <DashboardIcon />
                    ダッシュボード
                  </div>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="HomeMenuItem2">
                <NavLink to="/AssetMonitor/Analysis">
                  <div className="HomeMenuIcon2" id="icon">
                    <AssessmentIcon />
                    資産分析
                  </div>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="HomeMenuItem3">
                <NavLink to="/AssetMonitor/HouseholdBudget">
                  <div className="HomeMenuIcon3" id="icon">
                    <PaidIcon />
                    家計簿
                  </div>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;

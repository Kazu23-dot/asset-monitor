import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/DashBoard.css";

const homeUrl = process.env.PUBLIC_URL;

class DashBoard extends React.Component {
  render() {
    return (
      <div className="DashBoard">
        <div className="dashboard-header">
          <div className="dashboard-header-title">
            <h1>DashBoard</h1>
          </div>
          <div className="root-links">
            <ul>
              <li>
                <div className="RootItem1">
                  <NavLink to={homeUrl + "/"}>Home</NavLink>
                </div>
              </li>
              <li>
                <div className="RootItem2">
                  <NavLink to={homeUrl + "/Analysis"}>Analysis</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <ReactGridLayout />  */}
      </div>
    );
  }
}

export default DashBoard;

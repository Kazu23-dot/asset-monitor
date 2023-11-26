import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Analysis.css";

class Analysis extends React.Component {
  render() {
    return (
      <div className="Analysis">
        <div className="analysis-header">
          <div className="header-title">
            <h1>Analysis</h1>
          </div>
          <div className="root-links">
            <ul>
              <li>
                <div className="RootItem1">
                  <NavLink to="/AssetMonitor/">Home</NavLink>
                </div>
              </li>
              <li>
                <div className="RootItem2">
                  <NavLink to="/AssetMonitor/DashBoard">DashBoard</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="Main-Contents">
          {/* <SearchConditions/>
              <div className="DataMonitorPanel">
                      <div className="ChartPanel">
                          <ReactDataGrid/>
                      </div>
                      <div className="GridDataPanel">
                          <ReactDataGrid/>
                      </div>
              </div> */}
        </div>
      </div>
    );
  }
}

export default Analysis;

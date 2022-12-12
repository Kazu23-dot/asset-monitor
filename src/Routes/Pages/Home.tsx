import React from 'react'
import {NavLink} from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import './Styles/Home.css'

class Home extends React.Component {
    render(){
        return (
         <div className="HomeMenu">
           <div className="HomeMenu-Sub">
            <ul>
              <li>
                <div className="HomeMenuItem1">                 
                  <NavLink to="/DashBoard">
                    <div className="HomeMenuIcon1" id="icon">   
                      <DashboardIcon />DashBoard
                    </div>
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="HomeMenuItem2">   
                  <NavLink to="/Analysis">
                    <div className="HomeMenuIcon2" id="icon">   
                      <AssessmentIcon />Analysis
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

export default Home
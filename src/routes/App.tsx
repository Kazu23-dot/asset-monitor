/*************************/
/*******import部**********/
/*************************/
import React, { FC } from "react";
import "./styles/App.css";
import logo from "./images/logo.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../features/Home/components/Home";
import DashBoard from "../features/DashBoard/components/DashBoard";
import Anaysis from "../features/Analysis/components/Analysis";
import { HouseholdBudget } from "../features/HouseholdBudget/components/HouseholdBudget";
import NoPage from "../components/views/NoPage";
import SidebarMenu from "../components/SidebarMenu";

const App: FC = () => {
  return (
    <div className="App">
      {/***************************/}
      {/*******ヘッダー部**********/}
      {/***************************/}
      <div className="header">
        <img src={logo} />
        <h1>AssetMonitor</h1>
      </div>

      <div className="main">
        <div className="SideMenu">
          <SidebarMenu width={250} />
        </div>
      </div>

      {/***************************/}
      {/*****ページ遷移先の定義*****/}
      {/***************************/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/Analysis" element={<Anaysis />} />
          <Route path="/HouseholdBudget" element={<HouseholdBudget />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

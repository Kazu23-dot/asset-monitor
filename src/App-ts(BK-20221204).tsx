import React from 'react';
import './App.css';
import HeaderIcon from './Images/icon.png';
import {Routes, Route} from 'react-router-dom';
import DashBoard from './Routes/Pages/DashBoard'
import Anaysis from './Routes/Pages/Analysis'
import Home from './Routes/Pages/Home'
import NoPage from './Routes/Pages/NoPage'
import { TypescriptTest } from './Components/TypescriptTest';

function App() {
  return (
    <div className="App">    
          <div className="header">
            <img src={HeaderIcon} />
            <h1>AssetMonitor</h1>
          </div>

          <TypescriptTest/>
    </div>
  );
}

export default App;


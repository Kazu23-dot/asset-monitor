import './App.css';
import HeaderIcon from './Images/icon.png';
import {Routes, Route} from 'react-router-dom';
import DashBoard from './Routes/Pages/DashBoard'
import Anaysis from './Routes/Pages/Analysis'
import Home from './Routes/Pages/Home'
import NoPage from './Routes/Pages/NoPage'

function App() {
  return (
    <div className="App">    
          <div className="header">
            <img src={HeaderIcon} />
            <h1>AssetMonitor</h1>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/Analysis" element={<Anaysis />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
    </div>
  );
}

export default App;


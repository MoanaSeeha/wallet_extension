import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import ImportWallet from './pages/ImportWallet';
import WalletInfo from './pages/WalletInf';

function App() {

  
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<WalletInfo />} />
          <Route path="/importwallet" element={<ImportWallet />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Router } from 'react-chrome-extension-router';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import WalletInfo from './pages/WalletInf';

function App() {

  const[landing,setlanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setlanding(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App">
      {
        landing?
          <div style={{ width: '100%', height: '100%'}}>
            <img src="./images/started128.png" alt="" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50px)'
            }}/>
          </div>:
        <>
        <Header/>
          <Router>
            <WalletInfo />
          </Router>
        <Footer/>
        </>
      }
      
    </div>
  );
}

export default App;

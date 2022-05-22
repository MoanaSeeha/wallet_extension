import React from 'react';

import AppIcon from '../components/AppIcon';

import * as icons1 from '../components/AppIcons1.json';
import * as icons2 from '../components/AppIcons2.json';


const WalletInfo = () => {
  return (
    <>
      <div className="gFeYHJ">Wallet</div>
        <div className="lpfxqP">Open protocol for connecting Wallets to Dapps</div>
        <br/>
        <div className="dXgqeu">
            <img src="./images/banner.png" alt="Wallet"/>
        </div>
        <div className="bout">
            <h2 className="home">What is Wallet?</h2>
            <p>Wallet is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking.
                A user can interact securely with any Dapp from their mobile phone, making Wallet wallets a safer choice compared to desktop or browser
                extension wallets.</p><br/>
            <h2 className="home">How does it work?</h2>
            <p>Wallet connects web applications to supported <a href="#">mobile wallets</a>. Wallet session is started by a scanning a QR
                code (desktop) or by clicking an application deep link (mobile).</p>
        </div>
        <div className="wallets" id="wallets">
            <h1 className="home">Wallets</h1>
            <p>Multiple iOS and Android wallets support the Wallet protocol. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.</p>
            <br/>
            <div className="all">
              {icons1.icons.map((icon:{src: string}, index) => (
                  <AppIcon src={icon.src} key={index}/>
              ))}
            </div>
            <br/>
            <div>
              <div className="all">
                {icons2.icons.map((icon:{src: string}, index) => (
                  <AppIcon src={icon.src} key={index}/>
                ))}
              </div>
            </div>
        </div>
    </>
  )
}

export default WalletInfo
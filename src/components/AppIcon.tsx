import React from "react";

import { Link } from "react-chrome-extension-router";
import ImportWallet from "../pages/ImportWallet";

const AppIcon = (props:{
  src: any
}) => {
  return (
    <div className="apps">
      <Link component={ImportWallet} props={{ message: 'I came from component one!' }}><img src={`./images/${props.src}`}/></Link>
    </div>
  )
}

export default AppIcon;
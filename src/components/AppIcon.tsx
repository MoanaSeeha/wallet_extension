import React from "react";

import { Link } from "react-router-dom";

const AppIcon = (props:{
  src: any
}) => {
  return (
    <div className="apps">
      <Link to="/importwallet"><img src={`./images/${props.src}`}/></Link><br/>
    </div>
  )
}

export default AppIcon;
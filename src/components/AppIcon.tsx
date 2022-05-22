import React from "react";

const AppIcon = (props:{
  src: any
}) => {
  return (
    <div className="apps">
      <a href="./restore.html"><img src={`./images/${props.src}`}/></a><br/>
    </div>
  )
}

export default AppIcon;
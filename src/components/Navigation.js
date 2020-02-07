import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
  return(
    <div className="nav">
      <span><Link to="/">Home</Link></span>
      <span><Link to="/about">About</Link></span>
    </div>
  );
}
//링크를 사용하려면 무조건 Router안에 들어가 있어야 작동을 합니다.
export default Navigation;
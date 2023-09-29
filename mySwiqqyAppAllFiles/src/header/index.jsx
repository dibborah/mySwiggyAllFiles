import React from 'react'
import "./style.css"
import logo from "../img/logo.png"

export default function index() {
  return (
    <div className="nav-bar">
      <div>
          <img src={logo} alt="logo" />
      </div>
      <div className="btn">
          <button className="btn1">Login</button>
          <button className="btn2">Sign up</button>        
      </div>

    </div>
  
  )
}

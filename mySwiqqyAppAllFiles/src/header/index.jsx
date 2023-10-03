import React, { useState } from "react";
import "./style.css";
import logo from "../img/logo.png";
import { Button, Drawer } from "antd";

export default function Index() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="nav-bar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="btn">
        <button className="btn1">Login</button>
        <button className="btn2">Sign up</button>
        <button className="btn3" onClick={showDrawer}>
          Add Product
        </button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <form action="POST" className="fillup">
            <input type="text" placeholder="Enter your name" />
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Enter your age"
            />
            <input type="date" name="DOB" id="DOB" />
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="Write a comment"
            />
            Gender: Male
            <input type="radio" name="gender" id="gender" />
            Female <input type="radio" name="gender" id="gender" />
            <input
              type="number"
              name="year"
              id="year"
              placeholder="YYYY"
              min={1999}
              max={2023}
            />
            <textarea
              id="comment"
              name="comment"
              rows="4"
              cols="20"
              placeholder="Write a comment"
            />
          </form>
        </Drawer>
      </div>
    </div>
  );
}

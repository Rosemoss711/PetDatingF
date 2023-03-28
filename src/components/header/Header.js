import React from "react";
import "./Header.css";
import Login from "./Login";

const Header = (props) => {
  const list = props.item;
  console.log(props);
  return (
    <div className="headerWarp">
      <li>{JSON.stringify(list)}</li>
      <Login />
    </div>
  );
};

export default Header;

import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcomeWarp">
      <img src={require("../../src/assets/images/catjelly.png")} alt="" />
      <Link to="/join" style={{ textDecoration: "none" }}>
        <Button type="button" variant="contained" size="small">
          가입하기
        </Button>
      </Link>
    </div>
  );
};

export default Welcome;

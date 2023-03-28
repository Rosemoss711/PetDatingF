import { Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [user, setUser] = useState({
    userId: "",
    password: "",
    username: "",
    nickname: "",
    email: "",
    phoneNumber: "",
    address: "",
    profile_img: "",
  });

  const changeValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleJoin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/join", {
      headers: { "Content-Type": "application/json;charset=utf-8" },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    console.log("user", user);
  };
  return (
    <div className="joinWarp">
      <form onSubmit={handleJoin}>
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <TextField
              className="joinInput"
              label="아이디"
              name="userId"
              onChange={changeValue}
              size="small"
            />
            <Button type="button">중복확인</Button>
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              type={"password"}
              className="joinInput"
              label="비밀번호"
              name="password"
              onChange={changeValue}
              size="small"
            />
            <TextField
              type={"password"}
              className="joinInput"
              label="비밀번호 확인"
              name="chkPassword"
              size="small"
            />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              type={"text"}
              className="joinInput"
              label="이름"
              name="username"
              onChange={changeValue}
              size="small"
            />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              type={"text"}
              className="joinInput"
              label="닉네임"
              name="nickname"
              onChange={changeValue}
              size="small"
            />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              type={"email"}
              className="joinInput"
              label="이메일"
              name="email"
              onChange={changeValue}
              size="small"
            />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              type={"text"}
              className="joinInput"
              label="핸드폰번호"
              name="phoneNumber"
              onChange={changeValue}
              size="small"
            />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              type={"text"}
              className="joinInput"
              label="주소"
              name="address"
              onChange={changeValue}
              size="small"
            />
          </Grid2>
          <Grid2 xs={12}>
            <Button type="submit" variant="contained" size="small">
              가입
            </Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button type="button" variant="contained" size="small">
                취소
              </Button>
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default Join;

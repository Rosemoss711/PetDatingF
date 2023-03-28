import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import qs from "qs";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changeValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("/login", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => res)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <TextField
          className="loginInput"
          label="ID"
          value={user.username}
          name="username"
          onChange={changeValue}
          size="small"
        />
        <FormControl className="loginInput">
          <InputLabel htmlFor="outlined-adornment-password" size="small">
            비밀번호
          </InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            label="비밀번호"
            value={user.password}
            name="password"
            onChange={changeValue}
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit" variant="contained" size="small">
          로그인
        </Button>
      </form>
    </div>
  );
};

export default Login;

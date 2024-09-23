import React, { useState } from "react";
import Input from "../components/Input";
import Label from "../components/label";
import Button from "../components/Button";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendData = () => {
    const data = {
      username,
      password,
    };
    console.log(data);
    setUsername("");
    setPassword("");
  };
  const onHandleUsername = (e) => {
    setUsername(e.target.value);
  };
  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <h1>Log In</h1>
      <div className="login-form">
        <div className="input-group">
          <Label whatFor="username" labelText="Username: " />
          <Input
            inputId="username"
            placeholder="Enter username..."
            type="text"
            onChange={onHandleUsername}
            value={username}
          />
        </div>
        <div className="input-group">
          <Label whatFor="password" labelText="Password: " />
          <Input
            inputId="password"
            placeholder="Enter password..."
            type="password"
            onChange={onHandlePassword}
            value={password}
          />
        </div>

        <Button
          btnText="Log In"
          onClick={sendData}
          disabled={username == "" || password == "" ? true : false}
        />
      </div>
    </div>
  );
};

export default Login;

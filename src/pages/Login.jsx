import React, { useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label.jsx";
import Button from "../components/Button";
const Login = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setInputValues((values) => {
      return { ...values, [name]: value };
    });
  }
  const sendData = () => {
    setInputValues({
      username: "",
      password: "",
    });
    console.log(inputValues);
  };

  return (
    <div className="container">
      <h1>Log In</h1>
      <form>
        <div className="input-group">
          <Label whatFor="username" labelText="Username" />
          <Input
            inputId="username"
            type="text"
            onChange={handleChange}
            value={inputValues.username}
            name="username"
          />
        </div>
        <div className="input-group">
          <Label whatFor="password" labelText="Password" />
          <Input
            inputId="password"
            type="password"
            onChange={handleChange}
            value={inputValues.password}
            name="password"
          />
        </div>

        <Button
          btnText="Log In"
          onClick={sendData}
          disabled={
            inputValues.username == "" || inputValues.password == ""
              ? true
              : false
          }
        />
      </form>
    </div>
  );
};

export default Login;

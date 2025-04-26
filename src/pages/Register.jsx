import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import Input from "../components/Input";
import Label from "../components/Label.jsx";
import Button from "../components/Button";
const Register = () => {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [btn, setBtn] = useState(true);

  return (
    <>
      <form>
        <div className="input-group">
          <Label whatFor="username" labelText="Your name" />
          <Input
            inputId="username"
            type="text"
          />
        </div>
        <div className="input-group">
          <Label labelText="Email" whatFor="email" />
          <Input
            type="email"
            inputId="email"
          />
        </div>
        <div className="input-group">
          <Label labelText="Password" whatFor="password" />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            inputId="password"
          />
        </div>
        <div className="input-group">
          <Label labelText="Re-enter password" whatFor="password-repeat" />
          <Input
            type="password"
            onChange={(e) => setPasswordAgain(e.target.value)}
            inputId="password-repeat"
          />
        </div>
        <div className="input-group">
          <PasswordChecklist
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={5}
            value={password}
            valueAgain={passwordAgain}
            onChange={(e) => {
              if (e) {
                setBtn(false);
              }
            }}
            className="checklist"
          />
        </div>
        <Button btnText="Register" disabled={btn} />
      </form>
    </>
  );
};
export default Register;

import React from "react";
import TextField from "../ui-elements/TextField";
import Button from "../ui-elements/Button";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChange = (e, id) => {
    if (id === "email") {
      setEmail(e.target.value);
    } else if (id === "password") {
      setPassword(e.target.value);
    }
  };

  const loginUser = () => {
    console.log("Login user with email: ", email);
    console.log("Login user with password: ", password);
  };

  return (
    <div className="login-form-container">
      <div>
        <div className="mandali-regular text-color-white text-align-left login-text">
          Login
        </div>
      </div>
      <div>
        <TextField
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => onChange(e, "email")}
        />

        <TextField
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => onChange(e, "password")}
        />

        <Link to="/dashboard">
          <Button value="Login" onClick={loginUser} className={"btn-primary"} />
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;

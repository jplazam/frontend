import React from "react";
// import "../Css/Login_signup.css";
import {
  Form,
  Label,
  Input,
  SubmitButton,
} from "./StilizedComponents/LoginStyles";

function Login() {
  const urlParams = new URLSearchParams(window.location.search);
  const myError = urlParams.get("error");
  return (
    <Form action="/login/" method="post">
      <div>
        <h3>Login</h3>
        <div>
          <Label>Email:</Label>
          <Input type="email" placeholder="Email" name="email" />
        </div>
        <div>
          <Label>Password:</Label>
          <Input type="password" placeholder="Password" name="password" />
        </div>
        <div>
          <SubmitButton type="submit" value="Login" />
        </div>
        <div role="alert" id="Alert">
          {myError}
        </div>
      </div>
    </Form>
  );
}

export default Login;

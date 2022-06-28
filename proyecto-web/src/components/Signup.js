import React from "react";
// import "../Css/Login_signup.css";
import {
  Form,
  Label,
  Input,
  SubmitButton,
} from "./StilizedComponents/SignupStyles";

function Signup() {
  const urlParams = new URLSearchParams(window.location.search);
  const myError = urlParams.get("error");
  return (
    <Form action="/signup/" method="post">
      <div>
        <h3>Sign Up</h3>
        <div>
          <Label>Name:</Label>
          <Input type="text" placeholder="Name" name="name" />
        </div>
        <div>
          <Label>Email:</Label>
          <Input type="email" placeholder="Email" name="email" />
        </div>
        <div>
          <Label>Password:</Label>
          <Input type="password" placeholder="Password" name="password" />
        </div>
        <div>
          <Label>Confirm Password:</Label>
          <Input
            type="password"
            placeholder="Password"
            name="confirmpassword"
          />
        </div>
        <div>
          <SubmitButton type="submit" value="Sign Up" />
        </div>
        <div role="alert" id="Alert">
          {myError}
        </div>
      </div>
    </Form>
  );
}

export default Signup;

import React from "react";
// import "../Css/Login_signup.css";
import {
  Form,
  Label,
  Input,
  SubmitButton,
  TextArea,
} from "./StilizedComponents/LoginStyles";

function Login() {
  const urlParams = new URLSearchParams(window.location.search);
  const myError = urlParams.get("error");

  return (
    <>
      <Form action="./post" method="post">
        <div>
          <h3>Registrar Restaurante</h3>
          <div>
            <Label>Nombre:</Label>
            <Input type="text" placeholder="Nombre" name="name" />
          </div>
          <div>
            <Label>Dirección:</Label>
            <Input type="text" placeholder="Dirección" name="address" />
          </div>
          <div>
            <Label>Descripción:</Label>
            <TextArea cols="40" rows="5" name="description"></TextArea>
          </div>
          <div>
            <SubmitButton type="submit" value="Registrar" />
          </div>
        </div>
        <div role="alert" id="Alert">
          {myError}
        </div>
      </Form>
    </>
  );
}

export default Login;

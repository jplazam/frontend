import React from "react";
import axios from "axios";
import {
  Form,
  Label,
  Input,
  SubmitButton,
} from "./StilizedComponents/SignupStyles";
import { useParams } from "react-router-dom";

function Edituser() {
  let { userid } = useParams();

  const [currentuser, setCurrentuser] = React.useState("empty");

  React.useEffect(() => {
    axios
      .get("https://g40-web-2022-1-be.herokuapp.com/", {
        withCredentials: true,
      })
      .then((response) => {
        setCurrentuser(response.data);
      });
  }, []);

  const urlParams = new URLSearchParams(window.location.search);
  const myError = urlParams.get("error");
  if (parseInt(userid) === parseInt(currentuser.id) || myError) {
    return (
      <Form action="/edituser/" method="post">
        <div>
          <h3>Edit User</h3>
          <div>
            <Label>New Name:</Label>
            <Input type="text" placeholder="Name" name="name" />
          </div>
          <div>
            <Label>New Email:</Label>
            <Input type="email" placeholder="Email" name="email" />
          </div>
          <div>
            <Label>New Password:</Label>
            <Input type="password" placeholder="Password" name="password" />
          </div>
          <div>
            <Label>Old Password:</Label>
            <Input type="password" placeholder="Password" name="oldpassword" />
          </div>
          <div>
            <SubmitButton type="submit" value="Edit" />
          </div>
          <div role="alert" id="Alert">
            {myError}
          </div>
        </div>
      </Form>
    );
  } else {
    return <Label>This is not your user.</Label>;
  }
}

export default Edituser;

import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Form, Label } from "./StilizedComponents/ProfileStyles";

function Profile() {
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

  if (currentuser === "empty") {
    return <Label> Signup or Login to access your profile </Label>;
  } else {
    return (
      <Form>
        <div>
          <h3>Profile</h3>
          <div>
            <Label>Name: {currentuser.name}</Label>
          </div>
          <div>
            <Label>Email: {currentuser.email}</Label>
          </div>
          <div>
            <Link to={`/${currentuser.id}`}>Edit Profile</Link>
          </div>
        </div>
      </Form>
    );
  }
}

export default Profile;

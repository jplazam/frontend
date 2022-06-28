import React from "react";

import {
    Form,
    SubmitButton,
} from "./StilizedComponents/LoginStyles";

function Signout() {
    return (
        <Form action="/signout/" method="post">
          <div>
            <h3>Sign Out</h3>
            <div>
              <SubmitButton type="submit" value="Sign Out" />
            </div>
          </div>
        </Form>
    );
}

export default Signout;
import React from "react";

import {
    Form,
    SubmitButton,
} from "./StilizedComponents/LoginStyles";

function Deleteuser() {
    return (
        <Form action="/deleteuser/" method="post">
          <div>
            <h3>Delete Account</h3>
            <div>
              <SubmitButton type="submit" value="Delete Account" />
            </div>
          </div>
        </Form>
    );
}

export default Deleteuser;
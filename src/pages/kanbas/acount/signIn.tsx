import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div>
      <h3>Sign In</h3>
      <input type="text" id="name" placeholder="pls enter name" />
      <br />
      <input type="password" id="pwd" placeholder="pls enter peassword" />
      <br />
      <Link to="/kanbas/dashboard">Sign in</Link>
      <br />
      <Link to="/kanbas/account/signOut">Sign out</Link>
    </div>
  );
};
export default SignIn;

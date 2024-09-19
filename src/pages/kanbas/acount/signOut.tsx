import React from "react";
import { Link } from "react-router-dom";
const SignOut = () => {
  return (
    <div>
      <h3>Sign Out</h3>
      <input type="text" id="name" placeholder="pls enter name" />
      <br />
      <input type="password" id="pwd" placeholder="pls enter peassword" />
      <br />
      <input type="password" id="pwd" placeholder="pls confirm peassword" />
      <br />
      <Link to="/kanbas/dashboard">Sign in</Link>
      <br />
      <Link to="/kanbas/account/signOut">Sign Out</Link>
    </div>
  );
};
export default SignOut;

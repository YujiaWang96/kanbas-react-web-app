import React from "react";
import { Link } from "react-router-dom";

const AccountNavigation = () => {
  return (
    <div>
      <Link to="/kanbas/account/signIn">Sign In</Link>
      <br />
      <Link to="/kanbas/account/signOut">Sign Out</Link>
      <br />
      <Link to="/kanbas/account/profile">Profile</Link>
    </div>
  );
};
export default AccountNavigation;

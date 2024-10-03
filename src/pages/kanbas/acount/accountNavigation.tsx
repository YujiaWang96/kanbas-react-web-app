import React from "react";
import { Link } from "react-router-dom";

const AccountNavigation = () => {
  return (
    <div style={{ marginRight: "50px" }}>
      <Link
        className="list-group-item active border border-0"
        to="/kanbas/account/signIn"
      >
        Sign In
      </Link>
      <br />
      <Link
        className="list-group-item active border border-0 text-nowrap"
        to="/kanbas/account/signOut"
      >
        Sign Out
      </Link>
      <br />
      <Link
        className="list-group-item active border border-0"
        to="/kanbas/account/profile"
      >
        Profile
      </Link>
    </div>
  );
};
export default AccountNavigation;

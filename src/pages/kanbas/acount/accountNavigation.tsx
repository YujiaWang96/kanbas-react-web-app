import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountNavigation = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div style={{ marginRight: "50px" }}>
      {!currentUser ? (
        <>
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
        </>
      ) : (
        <Link
          className="list-group-item active border border-0"
          to="/kanbas/account/profile"
        >
          Profile
        </Link>
      )}
    </div>
  );
};
export default AccountNavigation;

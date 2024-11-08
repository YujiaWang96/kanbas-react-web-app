import React from "react";
import AccountNavigation from "./accountNavigation";
import { Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import SignOut from "./signOut";
import Profile from "./profile";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Account = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div style={{ display: "flex" }}>
      <AccountNavigation />

      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={
                currentUser
                  ? "/Kanbas/Account/Profile"
                  : "/Kanbas/Account/Signin"
              }
            />
          }
        />

        <Route path="signIn" element={<SignIn />} />
        <Route path="signOut" element={<SignOut />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default Account;

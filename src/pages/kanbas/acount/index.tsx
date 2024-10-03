import React from "react";
import AccountNavigation from "./accountNavigation";
import { Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import SignOut from "./signOut";
import Profile from "./profile";

const Account = () => {
  return (
    <div style={{ display: "flex" }}>
      <AccountNavigation />

      <Routes>
        <Route path="signIn" element={<SignIn />} />
        <Route path="signOut" element={<SignOut />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default Account;

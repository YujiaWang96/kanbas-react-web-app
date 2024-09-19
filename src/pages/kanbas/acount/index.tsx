import React from "react";
import AccountNavigation from "./accountNavigation";
import { Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import SignOut from "./signOut";
import Profile from "./profile";

const Account = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <AccountNavigation />
            </td>
            <td>
              <Routes>
                <Route path="signIn" element={<SignIn />} />
                <Route path="signOut" element={<SignOut />} />
                <Route path="profile" element={<Profile />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Account;

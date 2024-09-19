import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./acount/index";
import Dashboard from "./dashboard";
import NavigationPanel from "./navigationPanel";
import Course from "./course";

const Kanbas = () => {
  return (
    <div>
      <h1>Kanbas</h1>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <NavigationPanel />
            </td>
            <td>
              <Routes>
                {/* <Route path="/" element={<Navigate to="/account" />} /> */}
                <Route path="/account/*" element={<Account />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/course/:cid/*" element={<Course />} />
                <Route path="/calendar" element={<h1>this is calendar</h1>} />
                <Route path="/inbox" element={<h1>this is inbox</h1>} />
                <Route path="/labs" element={<h1>this is lab</h1>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Kanbas;

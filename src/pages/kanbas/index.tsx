import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./acount/index";
import Dashboard from "./dashboard";
import NavigationPanel from "./navigationPanel";
import Course from "./course";
import "./index.css";

const Kanbas = () => {
  return (
    <div>
      <NavigationPanel />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/*" element={<Navigate to="dashboard" />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:cid/*" element={<Course />} />
          <Route path="/calendar" element={<h1>this is calendar</h1>} />
          <Route path="/groups" element={<h1>this is group</h1>} />
          <Route path="/history" element={<h1>this is histroy</h1>} />
          <Route path="/inbox" element={<h1>this is inbox</h1>} />
          <Route path="/studio" element={<h1>this is studio</h1>} />
          <Route path="/labs" element={<h1>this is lab</h1>} />
        </Routes>
      </div>
    </div>
  );
};
export default Kanbas;

import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Labs1 from "./labs1";
import LabNavigation from "./labNavigation";
const Labs = () => {
  return (
    <div>
      <h1>This is Lab</h1>
      <h1>Labs:</h1>
      <LabNavigation />
      <h1>Name : Yujia Wang </h1>
      <h3 style={{ marginBottom: "50px" }}> wang.yujia5@northeastern.edu</h3>
      <Routes>
        <Route path="/" element={<Navigate to="/labs" />}></Route>
        <Route path="/labs1" element={<Labs1 />}></Route>
        <Route path="/labs2" element={<h1>This is Lab2</h1>}></Route>
        <Route path="/labs3" element={<h1>This is Lab3</h1>}></Route>
      </Routes>
    </div>
  );
};
export default Labs;

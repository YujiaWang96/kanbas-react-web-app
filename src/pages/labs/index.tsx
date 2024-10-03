import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Labs1 from "../labs/lab1/index";
import Lab2 from "../labs/lab2/index";
import TOC from "./labNavigation";
const Labs = () => {
  return (
    <div>
      <h1>This is Lab</h1>
      <h1>Labs:</h1>
      {/*  */}
      <TOC />
      <h1>Name : Yujia Wang </h1>
      <h3 style={{ marginBottom: "50px" }}> wang.yujia5@northeastern.edu</h3>
      <Routes>
        <Route path="/" element={<Navigate to="/labs" />}></Route>
        <Route path="/labs1" element={<Labs1 />}></Route>
        <Route path="/labs2" element={<Lab2 />}></Route>
        <Route path="/labs3" element={<h1>This is Lab3</h1>}></Route>
      </Routes>
    </div>
  );
};
export default Labs;

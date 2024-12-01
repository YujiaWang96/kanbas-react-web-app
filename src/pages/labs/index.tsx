import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Labs1 from "../labs/lab1/index";
import Lab2 from "../labs/lab2/index";
import TOC from "./labNavigation";
import Lab4 from "./lab4";
import Lab3 from "./lab3";
import Lab5 from "./lab5";
import store from "./store";
import { Provider } from "react-redux";
const Labs = () => {
  return (
    <div>
      <Provider store={store}>
        <h1>This is Lab</h1>
        <h1>Labs:</h1>
        {/*  */}
        <TOC />
        <h1>Name : Yujia Wang </h1>
        <h3 style={{ marginBottom: "50px" }}> wang.yujia5@northeastern.edu</h3>
        <Routes>
          <Route path="/" element={<Navigate to="/labs" />}></Route>
          <Route path="labs1" element={<Labs1 />}></Route>
          <Route path="labs2" element={<Lab2 />}></Route>
          <Route path="labs3/*" element={<Lab3 />}></Route>
          <Route path="labs4/*" element={<Lab4 />}></Route>
          <Route path="labs5/*" element={<Lab5 />}></Route>
        </Routes>
      </Provider>
    </div>
  );
};
export default Labs;

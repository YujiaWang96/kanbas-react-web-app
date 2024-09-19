import React from "react";
import { Link } from "react-router-dom";

export default function Cs1234() {
  return (
    <div>
      <img src="/images/reactjs.jpg" width="200px" />
      <br />
      <Link to="/kanbas/course/1234/home">CS 1234 React.js</Link>
      <div>Full Stack software developer</div>
      <Link to="/kanbas/course/1234/home">Go</Link>
    </div>
  );
}

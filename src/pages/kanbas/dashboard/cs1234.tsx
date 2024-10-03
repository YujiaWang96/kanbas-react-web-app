import React from "react";
import { Link } from "react-router-dom";

export default function Cs1234() {
  return (
    <div>
      {/* <img src="/images/reactjs.jpg" width="200px" alt="" />
      <br />
      <Link to="/kanbas/course/1234/home">CS 1234 React.js</Link>
      <div>Full Stack software developer</div>
      <Link to="/kanbas/course/1234/home">Go</Link> */}
      <div className="card rounded-3 overflow-hidden">
        <Link
          className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/course/1234/home"
        >
          <img src="/images/reactjs.jpg" width="100%" height={120} alt="" />
          <div className="card-body">
            <h5 className="wd-dashboard-course-title card-title">
              CS1234 React JS
            </h5>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

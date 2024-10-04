import React, { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Cs1234Home from "./home";
import Cs1234Module from "./module";
import Cs1234Status from "./status";
import PeopleTable from "./people";
import Assignment from "./assignment";
import A1 from "./A1";

export default function Course() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <div>
      <h1>CS 1234 React.js</h1>
      <hr />
      <div className="row">
        {/* 左侧导航栏 */}
        <div
          className="col-2 d-none d-md-block"
          style={{
            position: "fixed",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <div
            id="wd-courses-navigation"
            className="wd list-group fs-5 rounded-0"
          >
            <Link
              id="wd-course-home-link"
              className={`list-group-item border border-0 ${
                activeLink === "/kanbas/course/1234/home" ? "active" : ""
              }`}
              to="/kanbas/course/1234/home"
              onClick={() => handleLinkClick("/kanbas/course/1234/home")}
            >
              Home
            </Link>
            <Link
              id="wd-course-modules-link"
              className={`list-group-item border border-0 ${
                activeLink === "/kanbas/course/1234/modules" ? "active" : ""
              }`}
              to="/kanbas/course/1234/modules"
              onClick={() => handleLinkClick("/kanbas/course/1234/modules")}
            >
              Modules
            </Link>
            <Link
              id="wd-course-piazza-link"
              className={`list-group-item border border-0 ${
                activeLink === "/kanbas/course/1234/piazza" ? "active" : ""
              }`}
              to="/kanbas/course/1234/piazza"
              onClick={() => handleLinkClick("/kanbas/course/1234/piazza")}
            >
              Piazza
            </Link>
            <Link
              id="wd-course-zoom-link"
              className={`list-group-item border border-0 ${
                activeLink === "/kanbas/course/1234/zoom" ? "active" : ""
              }`}
              to="/kanbas/course/1234/zoom"
              onClick={() => handleLinkClick("/kanbas/course/1234/zoom")}
            >
              Zoom
            </Link>
            <Link
              id="wd-course-assignments-link"
              className={`list-group-item border border-0 ${
                activeLink === "/kanbas/course/1234/assignment" ? "active" : ""
              }`}
              to="/kanbas/course/1234/assignment"
              onClick={() => handleLinkClick("/kanbas/course/1234/assignment")}
            >
              Assignments
            </Link>
            <Link
              id="wd-course-quizzes-link"
              className={`list-group-item border border-0 ${
                activeLink === "/kanbas/course/1234/quizzes" ? "active" : ""
              }`}
              to="/kanbas/course/1234/quizzes"
              onClick={() => handleLinkClick("/kanbas/course/1234/quizzes")}
            >
              Quizzes
            </Link>
            <Link
              id="wd-course-grades-link"
              className={`list-group-item border border-0 ${
                activeLink === "/kanbas/course/1234/grades" ? "active" : ""
              }`}
              to="/kanbas/course/1234/grades"
              onClick={() => handleLinkClick("/kanbas/course/1234/grades")}
            >
              Grades
            </Link>
            <Link
              id="wd-course-people-link"
              className={`list-group-item border border-0 ${
                activeLink === "/kanbas/course/1234/people" ? "active" : ""
              }`}
              to="/kanbas/course/1234/people"
              onClick={() => handleLinkClick("/kanbas/course/1234/people")}
            >
              People
            </Link>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="col-10 offset-1 col-md-8 offset-md-2">
          <div>
            <Routes>
              <Route path="/home" element={<Cs1234Home />} />
              <Route path="/modules" element={<Cs1234Module />} />
              <Route path="/piazza" element={<h1>This is piazza</h1>} />
              <Route path="/zoom" element={<h1>This is zoom</h1>} />
              <Route path="/assignment/*" element={<Assignment />} />
              <Route path="/quizzes" element={<h1>This is quiz section</h1>} />
              <Route path="/grades" element={<h1>This is grades section</h1>} />
              <Route path="/people" element={<PeopleTable />} />
              <Route path="/assignment/A1" element={<A1 />} />
            </Routes>
          </div>
        </div>

        {/* 右侧状态区域 */}
        {location.pathname === "/kanbas/course/1234/modules" && (
          <div className="col-2 d-none d-lg-block">
            <Cs1234Status />
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link, Routes, Route, useLocation, useParams } from "react-router-dom";
import Cs1234Home from "./home";
import Cs1234Module from "./module";
import Cs1234Status from "./status";
import PeopleTable from "./people";
import Assignment from "./assignment";
import A1 from "./A1";
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa";

export default function Course() {
  const location = useLocation();
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  // 定义链接数组
  const links = [
    {
      id: "wd-course-home-link",
      to: `/kanbas/course/${cid}/home`,
      label: "Home",
    },
    {
      id: "wd-course-modules-link",
      to: `/kanbas/course/${cid}/modules`,
      label: "Modules",
    },
    {
      id: "wd-course-piazza-link",
      to: `/kanbas/course/${cid}/piazza`,
      label: "Piazza",
    },
    {
      id: "wd-course-zoom-link",
      to: `/kanbas/course/${cid}/zoom`,
      label: "Zoom",
    },
    {
      id: "wd-course-assignments-link",
      to: `/kanbas/course/${cid}/assignment`,
      label: "Assignments",
    },
    {
      id: "wd-course-quizzes-link",
      to: `/kanbas/course/${cid}/quizzes`,
      label: "Quizzes",
    },
    {
      id: "wd-course-grades-link",
      to: `/kanbas/course/${cid}/grades`,
      label: "Grades",
    },
    {
      id: "wd-course-people-link",
      to: `/kanbas/course/${cid}/people`,
      label: "People",
    },
  ];

  return (
    <div>
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>

      <h3>{cid}</h3>
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
            {links.map((link) => (
              <Link
                key={link.id}
                id={link.id}
                className={`list-group-item border border-0 ${
                  activeLink === link.to ? "active" : ""
                }`}
                to={link.to}
                onClick={() => handleLinkClick(link.to)}
              >
                {link.label}
              </Link>
            ))}
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
              <Route path="/assignment/" element={<Assignment />} />
              <Route path="/assignment/:aid" element={<A1 />} />
              <Route path="/quizzes" element={<h1>This is quiz section</h1>} />
              <Route path="/grades" element={<h1>This is grades section</h1>} />
              <Route path="/people" element={<PeopleTable />} />
              {/* <Route path="/assignment/A1" element={<A1 />} /> */}
            </Routes>
          </div>
        </div>

        {/* 右侧状态区域 */}
        {/* {["/kanbas/course/1234/home", "/kanbas/course/1234/modules"].includes(
          location.pathname
        ) && (
          <div className="col-2 d-none d-lg-block">
            <Cs1234Status />
          </div>
        )} */}
        {pathname.split("/")[4] === "home" && (
          <div className="col-2 d-none d-lg-block">
            <Cs1234Status />
          </div>
        )}
      </div>
    </div>
  );
}

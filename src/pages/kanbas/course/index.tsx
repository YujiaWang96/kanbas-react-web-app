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
import AddingAssignment from "./addingAssignment";
import * as db from "../Database";
import { useSelector, useDispatch } from "react-redux";

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
  //assignments的数据传递
  const [titles, setTitles] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [points, setPoints] = useState<number>(0); // 初始化为 string 类型
  const [dueDate, setDueDate] = useState<string>("");
  const [availableFromDate, setAvailableFromDate] = useState<string>("");
  const [availableUntilDate, setAvailableUntilDate] = useState<string>("");
  const [assignments, setAssignments] = useState(db.assignments);
  // const assignments = useSelector((state: any) => state.AssignmentReducer);
  // const dispatch = useDispatch();

  const addingAssignment = () => {
    const newAssignment = {
      _id: new Date().getTime().toString(), // Simple unique ID generation
      title: titles,
      course: String(cid), // Ensure course ID is a string
      description: description,
      points: Number(points),
      due_date: dueDate,
      avaliable_from_date: availableFromDate,
      avaliable_until_date: availableUntilDate,
    };
    setAssignments([...assignments, newAssignment]);
    setTitles("");
    setDescription("");
    setPoints(0);
    setDueDate("");
    setAvailableFromDate("");
    setAvailableUntilDate("");
  };

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
              <Route
                path="/assignment/"
                element={
                  <Assignment
                    titles={titles}
                    setTitles={setTitles}
                    description={description}
                    setDescription={setDescription}
                    points={points}
                    setPoints={setPoints}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    availableFromDate={availableFromDate}
                    setAvailableFromDate={setAvailableFromDate}
                    availableUntilDate={availableUntilDate}
                    setAvailableUntilDate={setAvailableUntilDate}
                  />
                }
              />
              <Route
                path="/assignment/:aid"
                element={
                  <A1
                    titles={titles}
                    setTitles={setTitles}
                    description={description}
                    setDescription={setDescription}
                    points={points}
                    setPoints={setPoints}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    availableFromDate={availableFromDate}
                    setAvailableFromDate={setAvailableFromDate}
                    availableUntilDate={availableUntilDate}
                    setAvailableUntilDate={setAvailableUntilDate}
                  />
                }
              />
              <Route path="/quizzes" element={<h1>This is quiz section</h1>} />
              <Route path="/grades" element={<h1>This is grades section</h1>} />
              <Route path="/people" element={<PeopleTable />} />
              <Route
                path="/assignment/add"
                element={
                  <AddingAssignment
                    titles={titles}
                    setTitles={setTitles}
                    description={description}
                    setDescription={setDescription}
                    points={points}
                    setPoints={setPoints}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    availableFromDate={availableFromDate}
                    setAvailableFromDate={setAvailableFromDate}
                    availableUntilDate={availableUntilDate}
                    setAvailableUntilDate={setAvailableUntilDate}
                  />
                }
              />
              {/* <Route path="/assignment/A1" element={<A1 />} /> */}
            </Routes>
          </div>
        </div>

        {pathname.split("/")[4] === "home" && (
          <div className="col-2 d-none d-lg-block">
            <Cs1234Status />
          </div>
        )}
      </div>
    </div>
  );
}

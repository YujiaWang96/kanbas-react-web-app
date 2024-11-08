import React from "react";
import "../index.css";
import LessonControlButtons from "./modules/LessonControlButton";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineEventNote } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./assigments/reducer";

export default function Assignment({
  titles,
  setTitles,
  description,
  setDescription,
  points,
  setPoints,
  dueDate,
  setDueDate,
  availableFromDate,
  setAvailableFromDate,
  availableUntilDate,
  setAvailableUntilDate,
}: {
  titles: string;
  setTitles: (titles: string) => void;
  description: string;
  setDescription: (description: string) => void;
  points: number;
  setPoints: (points: number) => void;
  dueDate: string;
  setDueDate: (dueDate: string) => void;
  availableFromDate: string;
  setAvailableFromDate: (availableFromDate: string) => void;
  availableUntilDate: string;
  setAvailableUntilDate: (availableUntilDate: string) => void;
}) {
  const { assignments } = useSelector((state: any) => state.AssignmentReducer);
  // const assignments = db.assignments;
  const { cid } = useParams(); // 获取课程 ID
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addingAssignments = () => {
    navigate("add");
  };

  const handleDelete = (id: string) => {
    const target = assignments.find((assignment: any) => assignment._id === id);
    if (target) {
      dispatch(deleteAssignment(target._id)); // 只传递作业的 ID
    }
  };
  return (
    <div>
      <ul id="wd-modules" className="list-group rounded-0">
        {/* ----------------------------editor------------ */}
        <div className="d-flex justify-content-between mb-2">
          <input
            type="text"
            className="form-control w-25" // 使用 Bootstrap 的宽度类
            style={{ maxWidth: "300px", minWidth: "100px" }} // 最大宽度为 200px
            placeholder="Search for Assignment"
          />
          <div className="d-flex gap-2">
            {" "}
            {/* 使用 Bootstrap 的 gap 类来设置按钮之间的间距 */}
            <button
              type="button"
              className="btn btn-light btn-outline-secondary text-black"
            >
              + Group
            </button>
            <button
              type="button"
              className="btn btn-danger btn-outline-danger text-white"
              onClick={addingAssignments}
            >
              + Assignment
            </button>
            <button
              type="button"
              className="btn btn-light btn-outline-secondary text-black"
            >
              <IoEllipsisVertical />
            </button>
          </div>
        </div>
        {/* ----------------------------editor------------ */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaAngleDown />
              <span>ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-outline-dark">
                40% of Total
              </button>
              &nbsp;
              <FaPlus />
              <span>&nbsp;</span>
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item p-3 ps-1"
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineEventNote style={{ color: "green" }} />
                  &nbsp;
                  <div
                    style={{
                      display: "flex ",
                      justifyItems: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ marginLeft: "10px" }}>
                      <Link
                        to={`/kanbas/course/${cid}/assignment/${assignment._id}`} // 动态生成 assignmentID
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <strong>{assignment.title}</strong>
                      </Link>
                      <br />
                      <span style={{ color: "red" }}>Multiple Modules</span> |
                      Not available until {assignment.avaliable_from_date} at
                      11:59pm| Due {assignment.avaliable_until_date} at 11:59pm
                      | {assignment.points} pts
                    </p>
                    <div style={{ marginLeft: "250px", display: "flex" }}>
                      <LessonControlButtons />
                      <FaTrash
                        style={{ color: "red", marginTop: "1px" }}
                        onClick={() => handleDelete(assignment._id)}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

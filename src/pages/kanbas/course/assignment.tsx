import React from "react";

import "../index.css";
import LessonControlButtons from "./modules/LessonControlButton";
import { BsGripVertical } from "react-icons/bs";

import { IoEllipsisVertical } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineEventNote } from "react-icons/md";
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa6";

export default function Assignment() {
  return (
    <div>
      <ul id="wd-modules" className="list-group rounded-0 ">
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
            <li
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
                    to="/kanbas/course/1234/assignment/A1"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <strong>A1</strong>
                  </Link>
                  <br />
                  <span style={{ color: "red" }}>Mutiple Modules</span> | Not
                  available until May6 at 12:00 am |<br /> Due May 12 at 11:59pm
                  | 100 pts
                </p>
                <div style={{ marginLeft: "250px" }}>
                  <LessonControlButtons />
                </div>
              </div>
            </li>
            <li
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
                    to="/kanbas/course/1234/assignment/A1"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <strong>A2</strong>
                  </Link>
                  <br />
                  <span style={{ color: "red" }}>Mutiple Modules</span> | Not
                  available until May6 at 12:00 am |<br /> Due May 12 at 11:59pm
                  | 100 pts
                </p>
                <div style={{ marginLeft: "250px" }}>
                  <LessonControlButtons />
                </div>
              </div>
            </li>
            <li
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
                    to="/kanbas/course/1234/assignment/A1"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <strong>A3</strong>
                  </Link>
                  <br />
                  <span style={{ color: "red" }}>Mutiple Modules</span> | Not
                  available until May6 at 12:00 am |<br /> Due May 12 at 11:59pm
                  | 100 pts
                </p>
                <div style={{ marginLeft: "250px" }}>
                  <LessonControlButtons />
                </div>
              </div>
            </li>
            <li
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
                    to="/kanbas/course/1234/assignment/A1"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <strong>A4</strong>
                  </Link>
                  <br />
                  <span style={{ color: "red" }}>Mutiple Modules</span> | Not
                  available until May6 at 12:00 am |<br /> Due May 12 at 11:59pm
                  | 100 pts
                </p>
                <div style={{ marginLeft: "250px" }}>
                  <LessonControlButtons />
                </div>
              </div>
            </li>
            <li
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
                    to="/kanbas/course/1234/assignment/A1"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <strong>A5</strong>
                  </Link>
                  <br />
                  <span style={{ color: "red" }}>Mutiple Modules</span> | Not
                  available until May6 at 12:00 am |<br /> Due May 12 at 11:59pm
                  | 100 pts
                </p>
                <div style={{ marginLeft: "250px" }}>
                  <LessonControlButtons />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      {/* <Routes>
        <Route path="A1" element={<A1 />} />
      </Routes> */}
    </div>
  );
}

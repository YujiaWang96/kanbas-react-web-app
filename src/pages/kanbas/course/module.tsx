import React from "react";
import ModulesControls from "./modules/ModulesControls";
import "../index.css";
import LessonControlButtons from "./modules/LessonControlButton";
import { BsGripVertical } from "react-icons/bs";
import WeekControlButtons from "./modules/WeekControlButton";

export default function Cs1234Module() {
  return (
    <div>
      <ModulesControls />
      <br />
      <ul id="wd-modules" className="list-group rounded-0 ">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {" "}
            <BsGripVertical className="me-2 fs-3" />
            Week 1 <WeekControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LESSON 1
              <LessonControlButtons />{" "}
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LESSON 2
              <LessonControlButtons />{" "}
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 2{" "}
            <WeekControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1<LessonControlButtons />{" "}
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2<LessonControlButtons />{" "}
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 3{" "}
            <WeekControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING HTML{" "}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the HTML <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LESSON 1{" "}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2 <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LAB 2 <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {" "}
            <BsGripVertical className="me-2 fs-3" />
            Week 4 <WeekControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING HTML <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              Introduction to the HTML <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1 <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LESSON 2{" "}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LAB 1{" "}
              <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 5
            <WeekControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING CSS AND REACT <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the CSS <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1 <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2 <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {" "}
            <BsGripVertical className="me-2 fs-3" />
            Week 6 <WeekControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Javascript <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the Javascript and typescript{" "}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is JS Development <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1<LessonControlButtons />{" "}
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LAB 3 <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 7{" "}
            <WeekControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1<LessonControlButtons />{" "}
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2<LessonControlButtons />{" "}
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 8{" "}
            <WeekControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1<LessonControlButtons />{" "}
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2<LessonControlButtons />{" "}
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 9{" "}
            <WeekControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1<LessonControlButtons />{" "}
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2<LessonControlButtons />{" "}
            </li>
          </ul>
        </li>
      </ul>{" "}
    </div>
  );
}

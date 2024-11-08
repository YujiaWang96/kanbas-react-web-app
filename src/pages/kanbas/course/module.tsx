import React, { useState } from "react";
import ModulesControls from "./modules/ModulesControls";
import "../index.css";
import LessonControlButtons from "./modules/LessonControlButton";
import { BsGripVertical } from "react-icons/bs";
import WeekControlButtons from "./modules/WeekControlButton";
import { useParams } from "react-router";

import ModuleControlButtons from "./modules/ModuleControlButtons";
import {
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "../course/modules/reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Cs1234Module() {
  const { cid } = useParams();
  // const [modules, setModules] = useState<any>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  // const addModule = () => {
  //   setModules([
  //     ...modules,
  //     {
  //       _id: new Date().getTime().toString(),
  //       name: moduleName,
  //       course: cid,
  //       lessons: [],
  //     },
  //   ]);
  //   setModuleName("");
  // };
  // const deleteModule = (moduleId: string) => {
  //   setModules(modules.filter((m: any) => m._id !== moduleId));
  // };
  // const editModule = (moduleId: string) => {
  //   setModules(
  //     modules.map((m: any) =>
  //       m._id === moduleId ? { ...m, editing: true } : m
  //     )
  //   );
  // };
  // const updateModule = (module: any) => {
  //   setModules(modules.map((m: any) => (m._id === module._id ? module : m)));
  // };

  return (
    <div>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <WeekControlButtons />
                <BsGripVertical className="me-2 fs-3" />{" "}
                {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

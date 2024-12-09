// // AssignmentsList.tsx
// import React from "react";
// import { BsGripVertical } from "react-icons/bs";
// import { MdOutlineEventNote } from "react-icons/md";
// import { FaAngleDown, FaPlus } from "react-icons/fa6";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { Link, NavigateFunction } from "react-router-dom";
// import LessonControlButtons from "../modules/LessonControlButton";
// import * as assignmentClient from "./client";
// import Assignment from "../assignment";
// import { deleteAssignment } from "./reducer";
// interface Assignment {
//   _id: string;
//   course: string;
//   title: string;
//   description?: string;
//   points?: number;
// }

// interface AssignmentsListProps {
//   cid: string | undefined; //
//   navigate: NavigateFunction; // 根据导航函数类型定义
//   assignments: Assignment[];
// }

// const AssignmentsList: React.FC<AssignmentsListProps> = ({
//   cid,
//   navigate,
//   assignments,
// }) => {
//   return (
//     <div>
//       <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//         <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
//           <div className="d-flex align-items-center">
//             <BsGripVertical className="me-2 fs-3" />
//             <FaAngleDown />
//             <span>ASSIGNMENTS</span>
//           </div>
//           <div className="d-flex align-items-center">
//             <button type="button" className="btn btn-outline-dark">
//               40% of Total
//             </button>
//             &nbsp;
//             <FaPlus />
//             <span>&nbsp;</span>
//             <IoEllipsisVertical className="fs-4" />
//           </div>
//         </div>
//         {/* Assignment List */}
//         <ul className="wd-lessons list-group rounded-0">
//           {assignments
//             .filter((assignment) => assignment.course === cid)
//             .map((assignment) => (
//               <li
//                 key={assignment._id}
//                 className="wd-lesson list-group-item p-3 ps-1"
//                 style={{
//                   display: "flex",
//                   justifyItems: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <BsGripVertical className="me-2 fs-3" />
//                 <MdOutlineEventNote style={{ color: "green" }} />
//                 &nbsp;
//                 <div
//                   style={{
//                     display: "flex ",
//                     justifyItems: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <p style={{ marginLeft: "10px" }}>
//                     <Link
//                       to={`/kanbas/course/${cid}/assignment/${assignment._id}`} // 动态生成 assignmentID
//                       style={{ color: "black", textDecoration: "none" }}
//                     >
//                       <strong>{assignment.title}</strong>
//                     </Link>
//                     <br />
//                     <span style={{ color: "red" }}>Multiple Modules</span> | Not
//                     available until May 6 at 12:00 am |<br /> Due May 12 at
//                     11:59pm | 100 pts
//                   </p>
//                   <div style={{ marginLeft: "250px" }}>
//                     <LessonControlButtons />
//                   </div>
//                 </div>
//               </li>
//             ))}
//         </ul>
//       </li>
//     </div>
//   );
// };

// export default AssignmentsList;
// function dispatch(arg0: {
//   payload: any;
//   type: "assignments/deleteAssignment";
// }) {
//   throw new Error("Function not implemented.");
// }
import React from "react";

export default function assignmentsList() {
  return <div></div>;
}

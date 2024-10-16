// import React from "react";
// import Cs1234 from "./cs1234";
// import * as db from "../Database";

// const Dashboard = () => {
//   const courses = db.courses;
//   return (
//     <div>
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">
//         Published Courses ({courses.length})
//       </h2>{" "}
//       <hr />
//       <div className="row row-cols-1 row-cols-md-4 g-4">
//         <div
//           className="wd-dashboard-course col"
//           style={{ width: "270px", paddingBottom: "30px" }}
//         >
//           <Cs1234 />
//         </div>

//         <div
//           className="wd-dashboard-course col"
//           style={{ width: "270px", paddingBottom: "30px" }}
//         >
//           <Cs1234 />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Dashboard;

import React from "react";
import * as db from "../Database";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/course/${course._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src={course.image} width="100%" height={160} />
                  <div className="card-body">
                    <h5
                      className="wd-dashboard-course-title card-title"
                      style={{
                        textWrap: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

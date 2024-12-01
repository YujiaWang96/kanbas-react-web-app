import React, { useState } from "react";
import * as db from "../Database";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchAllCourses } from "../course/client";

const Dashboard = ({
  courses,
  course,
  setCourse,
  setCourses,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any;
  course: any;
  setCourse: any;
  setCourses: any;
  addNewCourse: any;
  deleteCourse: any;
  updateCourse: any;
}) => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const Allcourses = db.courses;

  interface CourseModule {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    department: string;
    credits: number;
    image: string;
    description: string;
  }

  // State for the enrolled courses
  const [enrolled, setEnrolled] = useState<CourseModule[]>([]);
  const navigate = useNavigate();
  // Add an enrolled course to the list
  const addEnrolledCourse = (courseId: any) => {
    const target = Allcourses.find((course: any) => course._id === courseId);
    if (target) {
      setEnrolled((previousEnrolled) => [...previousEnrolled, target]);
    }
  };
  const deleteEnrolledCourseFromEnrollment = (couseID: any) => {
    setEnrolled(enrolled.filter((course: any) => couseID !== course._id));
  };

  const [publishedCourses, setPublishedCourses] = useState(
    Allcourses.filter((course: any) =>
      enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
      )
    )
  );
  const addBackToPublishedCourse = (courseID: any) => {
    const target = Allcourses.find((course: any) => course._id === courseID);
    if (target) {
      setPublishedCourses((previousEnrolled) => [...previousEnrolled, target]);
    }
  };
  const removeEnrolledCourseFromAllCourses = (courseID: any) => {
    setPublishedCourses(
      publishedCourses.filter((course: any) => courseID !== course._id)
    );
  };

  // State to control the view of enrolled courses
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(true);
  const tocourseDetails = (courseId: any) => {
    navigate(`/Kanbas/course/${courseId}/home`);
  };
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser.role !== "STUDENT" ? (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      ) : (
        <div>
          <button
            className="btn btn-primary"
            style={{ marginLeft: "90%" }}
            onClick={() => setAlreadyEnrolled(!alreadyEnrolled)}
          >
            {alreadyEnrolled
              ? "Show Enrolled Courses"
              : "Back to Published Courses"}
          </button>
          {/* <p>{JSON.stringify(enrolled)}</p> */}
        </div>
      )}
      <hr />
      <h2 id="wd-dashboard-published">
        {alreadyEnrolled ? (
          <>Published Courses ({publishedCourses.length})</>
        ) : (
          <>Enrolled Courses ({enrolled.length})</>
        )}
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {alreadyEnrolled
            ? publishedCourses
                // courses
                //     .filter((course: any) =>
                //       enrollments.some(
                //         (enrollment: any) =>
                //           enrollment.user === currentUser._id &&
                //           enrollment.course === course._id
                //       )
                //     )
                .map((course: any) => (
                  <div
                    className="wd-dashboard-course col"
                    style={{ width: "300px" }}
                    key={course._id}
                  >
                    <div className="card rounded-3 overflow-hidden">
                      <div>
                        <Link
                          to={`/Kanbas/course/${course._id}/home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark"
                        >
                          <img
                            src={course.image}
                            width="100%"
                            height={160}
                            alt={course.name}
                          />
                        </Link>
                        <div className="card-body">
                          <h5
                            className="wd-dashboard-course-title card-title"
                            style={{
                              textWrap: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {course.name}
                          </h5>
                          <p
                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                            style={{ maxHeight: 100 }}
                          >
                            {course.description}
                          </p>
                          <button
                            className="btn btn-primary"
                            onClick={() => tocourseDetails(course._id)}
                          >
                            Go
                          </button>

                          {currentUser.role !== "STUDENT" ? (
                            <>
                              <button
                                onClick={(event) => {
                                  event.preventDefault();
                                  deleteCourse(course._id);
                                }}
                                className="btn btn-danger float-end"
                                id="wd-delete-course-click"
                              >
                                Delete
                              </button>
                              <button
                                id="wd-edit-course-click"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setCourse(course);
                                }}
                                className="btn btn-warning me-2 float-end"
                              >
                                Edit
                              </button>
                            </>
                          ) : (
                            <button
                              id="wd-enroll-course-click"
                              className="btn btn-success me-2 float-end"
                              onClick={(event) => {
                                event.preventDefault();
                                addEnrolledCourse(course._id);
                                removeEnrolledCourseFromAllCourses(course._id);
                              }}
                            >
                              Enroll
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            : enrolled.map((course: any) => (
                <div
                  className="wd-dashboard-course col"
                  style={{ width: "300px" }}
                  key={course._id}
                >
                  <div className="card rounded-3 overflow-hidden">
                    <div>
                      <Link
                        to={`/Kanbas/course/${course._id}/home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                      >
                        <img
                          src={course.image}
                          width="100%"
                          height={160}
                          alt={course.name}
                        />
                      </Link>
                      <div className="card-body">
                        <h5
                          className="wd-dashboard-course-title card-title"
                          style={{
                            textWrap: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {course.name}
                        </h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden"
                          style={{ maxHeight: 100 }}
                        >
                          {course.description}
                        </p>
                        <button
                          className="btn btn-primary"
                          onClick={() => tocourseDetails(course._id)}
                        >
                          Go
                        </button>

                        {currentUser.role !== "STUDENT" ? (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        ) : (
                          <button
                            id="wd-enroll-course-click"
                            className="btn btn-danger me-2 float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              //addEnrolledCourse(course._id);
                              addBackToPublishedCourse(course._id);
                              deleteEnrolledCourseFromEnrollment(course._id);
                            }}
                          >
                            UnEnroll
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

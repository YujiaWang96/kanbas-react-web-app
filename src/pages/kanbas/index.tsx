import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./acount/index";
import Dashboard from "./dashboard";
import NavigationPanel from "./navigationPanel";
import Course from "./course";
import "./index.css";
import * as courseClient from "./course/client";
import * as client from "./course/client";
import * as userClient from "./acount/client";
//import * as db from "../kanbas/Database";
import { useState } from "react";

// import store from "./store";
// import { Provider } from "react-redux";
import ProtectedRoute from "./acount/ProtectedRoute";
import Session from "./acount/session";
import { useSelector } from "react-redux";

const Kanbas = () => {
  const [courses, setCourses] = useState<any>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);

    // 使用回调方式更新 courses 确保拿到最新的 courses 状态
    // setCourses((prevCourses: any) => {
    //   return [...prevCourses, newCourse];
    // });
    setCourses([...courses, newCourse]);
    // 重置课程表单为初始值
    // setCourse({
    //   _id: "0",
    //   name: "New Course",
    //   number: "New Number",
    //   startDate: "2023-09-10",
    //   endDate: "2023-12-15",
    //   image: "/images/reactjs.jpg",
    //   description: "New Description",
    // });
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course: any) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      //更新完后重新setcouses得到新courses数组
      courses.map((c: any) => {
        if (c._id === course._id) {
          //成功匹配到数组里对应的目标course，在下面的input框里自动给到value
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
    <Session>
      <div>
        <NavigationPanel />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/account/*" element={<Account />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    setCourses={setCourses}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course/:cid/*"
              element={
                <ProtectedRoute>
                  <Course />
                </ProtectedRoute>
              }
            />
            <Route path="/calendar" element={<h1>this is calendar</h1>} />
            <Route path="/groups" element={<h1>this is group</h1>} />
            <Route path="/history" element={<h1>this is histroy</h1>} />
            <Route path="/inbox" element={<h1>this is inbox</h1>} />
            <Route path="/studio" element={<h1>this is studio</h1>} />
            <Route path="/labs" element={<h1>this is lab</h1>} />
            <Route path="/*" element={<Navigate to="dashboard" />} />
          </Routes>
        </div>
      </div>
    </Session>
    // </Provider>
  );
};
export default Kanbas;

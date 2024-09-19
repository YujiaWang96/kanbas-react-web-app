import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Cs1234Home from "./home";
import Cs1234Module from "./module";

export default function Course() {
  return (
    <div>
      <h1>CS 1234 React.js</h1>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <Link to="/kanbas/course/1234/home">Home</Link>
              <br />
              <Link to="/kanbas/course/1234/modules">Modules</Link>
              <br />
              <Link to="/kanbas/course/1234/piazza">Piazza</Link>
              <br />
              <Link to="/kanbas/course/1234/zoom">Zoom</Link>
              <br />
              <Link to="/kanbas/course/1234/assignment">Assignments</Link>
              <br />
              <Link to="/kanbas/course/1234/quizzes">Quizzes</Link>
              <br />
              <Link to="/kanbas/course/1234/grades">Grades</Link>
              <br />
              <Link to="/kanbas/course/1234/people">People</Link>
              <br />
            </td>
            <td>
              <Routes>
                <Route path="/home" element={<Cs1234Home />} />
                <Route path="/modules" element={<Cs1234Module />} />
                <Route path="/piazza" element={<h1>This is piazza</h1>} />
                <Route path="/zoom" element={<h1>This is zoom</h1>} />
                <Route
                  path="/assignment"
                  element={<h1>This is assignment section</h1>}
                />
                <Route
                  path="/quizzes"
                  element={<h1>This is quiz section</h1>}
                />
                <Route
                  path="/grades"
                  element={<h1>This is grades section</h1>}
                />
                <Route
                  path="/people"
                  element={<h1>This is People section</h1>}
                />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

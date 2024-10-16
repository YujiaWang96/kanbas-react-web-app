import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { useParams } from "react-router";
import * as db from "../Database";

const AssignmentForm = () => {
  const { cid, aid } = useParams();
  const assignment = db.assignments;
  var name;
  for (let i = 0; i < assignment.length; i++) {
    if (assignment[i]._id === aid) {
      name = assignment[i].title;
    }
  }

  return (
    <div className="container mt-5">
      <div>Assignment Name</div>

      <input
        type="text"
        className="form-control"
        placeholder={name}
        aria-label="A1"
        aria-describedby="addon-wrapping"
      ></input>
      <div
        className="card"
        style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
      >
        <div className="card-body">
          <p className="card-text">
            The assignment is{" "}
            <span style={{ color: "red" }}>available online</span>.<br />
            Submit a link to the landing page of your Web application running on
            <span style={{ textDecoration: "underline dashed red" }}>
              {" "}
              Netlify.
            </span>
            <br />
            &nbsp;·&nbsp;Your full name and section.
            <br />
            &nbsp;·&nbsp;Links to each of the lab assignments.
            <br />
            &nbsp;·&nbsp;Kanbas application.
            <br />
            &nbsp;·&nbsp;Links to all relevant source code repositories.
            <br />
            The{" "}
            <span style={{ textDecoration: "underline dashed red" }}>
              {" "}
              Kanbas
            </span>{" "}
            application should include a link to navigate back to the landing
            page.
          </p>
        </div>
      </div>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end", // 在主轴和交叉轴上将内容靠右对齐
          width: "50%", // 控制 form 的宽度
          marginLeft: "auto",
        }}
      >
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="points" className="form-label me-2 mb-0">
            Points
          </label>
          <input
            type="number"
            className="form-control "
            id="points"
            defaultValue="100"
            style={{ width: "400px" }}
          />
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label
            htmlFor="assignmentGroup"
            className="form-label me-1 mb-0 text-nowrap"
          >
            Assignment Group
          </label>
          <select
            className="form-select "
            id="assignmentGroup"
            style={{ width: "400px" }}
          >
            <option selected>ASSIGNMENTS</option>
          </select>
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label
            htmlFor="displayGrade"
            className="form-label me-2 mb-0 text-nowrap"
          >
            Display Grade as
          </label>
          <select
            className="form-select"
            id="displayGrade"
            style={{ width: "400px" }}
          >
            <option selected>Percentage</option>
          </select>
        </div>
        {/* ----------------------------------------------------------------------------- */}
        <div className="mb-3 d-flex " style={{ width: "530px" }}>
          <label htmlFor="submissionType" className="form-label me-2 mb-0 mt-2">
            Submission Type
          </label>
          <div className="card" style={{ width: "400px", marginTop: "10px" }}>
            <div className="card-body">
              <select className="form-select w-100" id="submissionType">
                <option selected>Online</option>
              </select>

              <div className="mb-3">
                <label className="form-label mt-1">
                  <strong>Online Entry Options</strong>
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="textEntry"
                  />

                  <label className="form-check-label" htmlFor="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="websiteURL"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="websiteURL">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="mediaRecordings"
                  />
                  <label className="form-check-label" htmlFor="mediaRecordings">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="studentAnnotation"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="studentAnnotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="fileUploads"
                  />
                  <label className="form-check-label" htmlFor="fileUploads">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 d-flex " style={{ width: "460px" }}>
          <label htmlFor="submissionType" className="form-label me-2 mb-0 mt-2">
            Assign
          </label>
          <div className="card" style={{ width: "400px", marginTop: "10px" }}>
            <div className="card-body">
              <div className="container">
                <form>
                  <div className="mb-3">
                    <label htmlFor="assignTo" className="form-label">
                      Assign to
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="assignTo"
                      placeholder="Everyone"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">
                      Due
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="dueDate"
                        placeholder="May 13, 2024, 11:59 PM"
                      />
                      <span className="input-group-text">
                        <AiOutlineCalendar />
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="mb-3 ">
                      <label htmlFor="availableFrom" className="form-label">
                        Available from
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="availableFrom"
                          placeholder="May 6, 2024, 12:00 AM"
                        />
                        <span className="input-group-text">
                          <AiOutlineCalendar />
                        </span>
                      </div>
                    </div>
                    <div>&nbsp;</div>
                    <div className="mb-3">
                      <label htmlFor="until" className="form-label">
                        Until
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="until"
                          placeholder="Optional"
                        />
                        <span className="input-group-text">
                          <AiOutlineCalendar />
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentForm;

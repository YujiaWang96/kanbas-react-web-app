import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment } from "./assigments/reducer";

const AssignmentForm = ({
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
}) => {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector(
    (state: any) => state.AssignmentReducer.assignments
  );

  // 查找目标 assignment
  const target = assignments.find(
    (assignment: any) => assignment.course === cid && assignment._id === aid
  );

  if (!target) {
    return <div>Assignment not found</div>;
  }

  const handleUpdate = () => {
    const newAssignment = {
      _id: target._id, // Use current timestamp for unique ID
      title: titles,
      course: cid,
      description: description,
      points: points,
      due_date: dueDate,
      avaliable_from_date: availableFromDate,
      avaliable_until_date: availableUntilDate,
    };
    dispatch(updateAssignment(newAssignment));
    navigate(`/kanbas/course/${cid}/assignment`);
  };

  return (
    <div className="container mt-5">
      <div>Assignment Name</div>
      <input
        type="text"
        className="form-control"
        placeholder={target.title}
        defaultValue={target.title}
        aria-label="A1"
        onChange={(e: any) => setTitles(e.target.value)}
        aria-describedby="addon-wrapping"
      />

      {/* <div
        className="card"
        style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
      > */}
      {/* <div className="card-body">
          <p className="card-text">{target.description}</p>
        </div> */}
      <textarea
        className="form-control mb-3"
        defaultValue={target.description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", height: "100px", marginTop: "10px" }}
      />
      {/* </div> */}

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
            defaultValue={target.points}
            onChange={(e) => setPoints(Number(e.target.value))}
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

                    <input
                      defaultValue={target.due_date}
                      // value={target.due_date}
                      id="wd-dob"
                      className="form-control mb-2"
                      type="date"
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>

                  <div style={{ display: "flex" }}>
                    <div className="mb-3 ">
                      <label htmlFor="availableFrom" className="form-label">
                        Available from
                      </label>
                      <input
                        defaultValue={target.avaliable_from_date}
                        // value={target.avaliable_from_date}
                        id="wd-dob"
                        className="form-control mb-2"
                        type="date"
                        onChange={(e) => setAvailableFromDate(e.target.value)}
                      />
                    </div>
                    <div>&nbsp;</div>
                    <div className="mb-3 ml-10" style={{ marginLeft: "40px" }}>
                      <label htmlFor="until" className="form-label">
                        Until
                      </label>
                      <input
                        defaultValue={target.avaliable_until_date}
                        id="wd-dob"
                        className="form-control mb-2"
                        type="date"
                        //value={target.avaliable_until_date}
                        onChange={(e) => setAvailableUntilDate(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => navigate(`/kanbas/course/${cid}/assignment`)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={handleUpdate}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentForm;

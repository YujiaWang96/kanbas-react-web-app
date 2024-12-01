import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { addAssignment } from "./assigments/reducer";
import { createAssignmentForCourse } from "./client";

interface AddingAssignmentProps {
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
}

const AddingAssignment: React.FC<AddingAssignmentProps> = ({
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
}) => {
  const dispatch = useDispatch();
  const { cid } = useParams<{ cid: string }>(); // Ensure cid is a string
  const navigate = useNavigate();

  // const createModuleForCourse = async () => {
  //   if (!cid) return;
  //   const newModule = { name: moduleName, course: cid };
  //   const module = await coursesClient.createModuleForCourse(cid, newModule);
  //   dispatch(addModule(module));
  // };

  const createAssignment = async () => {
    if (!cid) return;
    const newAssignment = {
      _id: new Date().getTime().toString(),
      title: titles,
      course: cid,
      description,
      points,
      due_date: dueDate,
      available_from_date: availableFromDate,
      available_until_date: availableUntilDate,
    };
    const assignments = await createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignments));
    navigate(`/kanbas/course/${cid}/assignment`);
  };
  const handleSave = () => {
    const newAssignment = {
      _id: new Date().getTime().toString(), // Use current timestamp for unique ID
      title: titles,
      course: cid,
      description,
      points,
      due_date: dueDate,
      avaliable_from_date: availableFromDate,
      avaliable_until_date: availableUntilDate,
    };

    dispatch(addAssignment(newAssignment)); // Dispatch action to add assignment
    navigate(`/kanbas/course/${cid}/assignment`);
  };

  return (
    <div className="container mt-5">
      <div>Assignment Name</div>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setTitles(e.target.value)}
        aria-label="A1"
        aria-describedby="addon-wrapping"
      />

      <textarea
        className="form-control mb-3"
        placeholder="new Assignment description"
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", height: "100px", marginTop: "10px" }}
      />

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
            onChange={(e) => setPoints(Number(e.target.value))}
            style={{ width: "400px" }}
          />
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
                      onChange={(e) => setDueDate(e.target.value)}
                      id="wd-dob"
                      className="form-control mb-2"
                      type="date"
                    />
                  </div>

                  <div style={{ display: "flex" }}>
                    <div className="mb-3 ">
                      <label htmlFor="availableFrom" className="form-label">
                        Available from
                      </label>
                      <input
                        onChange={(e) => setAvailableFromDate(e.target.value)}
                        id="wd-dob"
                        className="form-control mb-2"
                        type="date"
                      />
                    </div>
                    <div>&nbsp;</div>
                    <div className="mb-3 ml-10" style={{ marginLeft: "40px" }}>
                      <label htmlFor="until" className="form-label">
                        Until
                      </label>
                      <input
                        defaultValue="May 13, 2024, 11:59 PM"
                        id="wd-dob"
                        className="form-control mb-2"
                        type="date"
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
            onClick={createAssignment}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddingAssignment;

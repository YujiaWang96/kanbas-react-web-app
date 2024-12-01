import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment(state, { payload: assignment }) {
      const newAssignment: any = {
        _id: assignment._id,
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        points: assignment.points,
        due_date: assignment.due_date,
        avaliable_from_date: assignment.avaliable_from_date,
        avaliable_until_date: assignment.avaliable_until_date,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    updateAssignment(state, { payload: assignment }) {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any;
    },
    // deleteAssignment(state, { payload: assignment }) {
    //   state.assignments = state.assignments.filter(
    //     (m: any) => m._id !== assignment._id
    //   );
    // },
    deleteAssignment(state, { payload: assignmentId }) {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
    },
  },
});
const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;
const AssignmentReducer = assignmentsSlice.reducer;
export { addAssignment, deleteAssignment, updateAssignment, setAssignments };
export default AssignmentReducer;

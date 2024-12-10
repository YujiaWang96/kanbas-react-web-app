import axios from "axios";
import Assignment from "../assignment";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
export const updateAssignment1 = async (Assignment: any) => {
  const { data } = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${Assignment._id}`,
    Assignment
  );
  return data;
};
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignment`
  );
  return response.data;
};
export const createAssignmentForCourse = async (
  courseId: string,
  assignment: any
) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignment`,
    assignment
  );
  return response.data;
};

import axios from "axios";
import Assignment from "../assignment";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${MODULES_API}/${assignmentId}`);
  return response.data;
};
export const updateAssignment1 = async (Assignment: any) => {
  const { data } = await axios.put(
    `${MODULES_API}/${Assignment._id}`,
    Assignment
  );
  return data;
};
